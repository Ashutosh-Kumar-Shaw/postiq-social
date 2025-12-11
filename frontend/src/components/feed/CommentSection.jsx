import React, { useState } from 'react';
import '../../styles/CommentSection.css';
import { Heart } from 'lucide-react';

const CommentSection = ({
  comments = [],
  onAddComment,
  onLikeComment,
  onReplyComment,
}) => {
  const [displayCount, setDisplayCount] = useState(2);
  const [likedComments, setLikedComments] = useState(new Set());
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState('');

  const displayedComments = comments.slice(0, displayCount);
  const hasMoreComments = displayCount < comments.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 5);
  };

  const handleLikeComment = (commentId) => {
    const newLiked = new Set(likedComments);
    if (newLiked.has(commentId)) {
      newLiked.delete(commentId);
    } else {
      newLiked.add(commentId);
    }
    setLikedComments(newLiked);
    if (onLikeComment) {
      onLikeComment(commentId);
    }
  };

  const handleReplySubmit = (commentId) => {
    if (replyText.trim()) {
      if (onReplyComment) {
        onReplyComment(commentId, replyText);
      }
      setReplyText('');
      setReplyingTo(null);
    }
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  if (!comments || comments.length === 0) {
    return null;
  }

  return (
    <div className="comment-section-wrapper">
      <div className="comments-list">
        {displayedComments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <img
              src={comment.author?.avatar || 'https://i.pravatar.cc/32?img=default'}
              alt={comment.author?.name}
              className="comment-avatar"
            />
            <div className="comment-content">
              <div className="comment-header">
                <span className="comment-author">{comment.author?.name}</span>
                <span className="comment-time">{formatTimestamp(comment.timestamp)}</span>
              </div>
              <p className="comment-text">{comment.text}</p>
              <div className="comment-actions">
                <button
                  className="comment-action-btn"
                  onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                >
                  Reply
                </button>
                <button
                  className={`comment-action-btn like-comment ${likedComments.has(comment.id) ? 'liked' : ''}`}
                  onClick={() => handleLikeComment(comment.id)}
                >
                  {likedComments.has(comment.id) ? (
                    <Heart className="comment-heart-icon" size={14} fill="currentColor" />
                  ) : (
                    <Heart className="comment-heart-icon" size={14} />
                  )}
                  {comment.likes || 0}
                </button>
              </div>

              {/* Reply Box */}
              {replyingTo === comment.id && (
                <div className="reply-box">
                  <input
                    type="text"
                    className="reply-input"
                    placeholder="Write a reply..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleReplySubmit(comment.id);
                      }
                    }}
                  />
                  <div className="reply-actions">
                    <button
                      className="reply-submit"
                      onClick={() => handleReplySubmit(comment.id)}
                      disabled={!replyText.trim()}
                    >
                      Reply
                    </button>
                    <button
                      className="reply-cancel"
                      onClick={() => {
                        setReplyingTo(null);
                        setReplyText('');
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMoreComments && (
        <button className="load-more-comments" onClick={handleLoadMore}>
          Load {Math.min(5, comments.length - displayCount)} more comments
        </button>
      )}
    </div>
  );
};

export default CommentSection;
