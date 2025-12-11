import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import PostFeed from "@/components/feed/PostFeed";
import UploadPanel from "@/components/feed/UploadPanel";

const Home = () => {
    const initialPosts = [
        {
            id: 1,
            author: {
                name: 'Briansky',
                avatar: 'https://i.pravatar.cc/48?img=1',
            },
            timestamp: new Date(Date.now() - 3600000),
            content: {
                text: 'Beautiful art ✨',
                image: 'https://media.istockphoto.com/photos/blog-picture-id479759238?k=6&m=479759238&s=612x612&w=0&h=cIOO2FfZ9YKhVrXLAiBnu9r7Z9kWOa9uqPcBS5Pdebo=',
                hashtags: '#art #aesthetics #artist #artphotography #photography',
            },
            likes: 320,
            comments: 128,
            shares: 148,
            commentsList: [
                {
                    id: 'c1',
                    author: { name: 'John Doe', avatar: 'https://i.pravatar.cc/32?img=10' },
                    text: 'Wow, this is amazing artwork!',
                    timestamp: new Date(Date.now() - 1800000),
                    likes: 5,
                },
                {
                    id: 'c2',
                    author: { name: 'Emma Wilson', avatar: 'https://i.pravatar.cc/32?img=11' },
                    text: 'Love the color palette 🎨',
                    timestamp: new Date(Date.now() - 900000),
                    likes: 12,
                },
                {
                    id: 'c3',
                    author: { name: 'Alex Smith', avatar: 'https://i.pravatar.cc/32?img=12' },
                    text: 'Where can I see more of your work?',
                    timestamp: new Date(Date.now() - 600000),
                    likes: 3,
                },
                {
                    id: 'c4',
                    author: { name: 'Lisa Chen', avatar: 'https://i.pravatar.cc/32?img=13' },
                    text: 'Absolutely stunning! 🌟',
                    timestamp: new Date(Date.now() - 300000),
                    likes: 8,
                },
                {
                    id: 'c5',
                    author: { name: 'Mike Brown', avatar: 'https://i.pravatar.cc/32?img=14' },
                    text: 'This should be in a gallery',
                    timestamp: new Date(Date.now() - 180000),
                    likes: 6,
                },
                {
                    id: 'c6',
                    author: { name: 'Sara Johnson', avatar: 'https://i.pravatar.cc/32?img=15' },
                    text: 'The composition is perfect',
                    timestamp: new Date(Date.now() - 60000),
                    likes: 4,
                },
                {
                    id: 'c7',
                    author: { name: 'Tom Davis', avatar: 'https://i.pravatar.cc/32?img=16' },
                    text: 'One of the best pieces I\'ve seen',
                    timestamp: new Date(Date.now() - 30000),
                    likes: 11,
                },
            ],
        },
        {
            id: 2,
            author: {
                name: 'Sarah Smith',
                avatar: 'https://i.pravatar.cc/48?img=2',
            },
            timestamp: new Date(Date.now() - 7200000),
            content: {
                text: 'Exploring new technologies in web development',
                summary: 'This post discusses the latest trends in web development including React hooks, TypeScript, and Tailwind CSS adoption in enterprise applications.',
            },
            likes: 156,
            comments: 24,
            shares: 8,
            commentsList: [
                {
                    id: 'c8',
                    author: { name: 'Code Master', avatar: 'https://i.pravatar.cc/32?img=20' },
                    text: 'Great insights! React 19 is amazing',
                    timestamp: new Date(Date.now() - 3600000),
                    likes: 7,
                },
                {
                    id: 'c9',
                    author: { name: 'Dev Guru', avatar: 'https://i.pravatar.cc/32?img=21' },
                    text: 'TypeScript is a game changer',
                    timestamp: new Date(Date.now() - 1800000),
                    likes: 9,
                },
            ],
        },
        {
            id: 3,
            author: {
                name: 'Mike Johnson',
                avatar: 'https://i.pravatar.cc/48?img=3',
            },
            timestamp: new Date(Date.now() - 86400000),
            content: {
                text: 'Happy to announce that our team won the hackathon! Thank you all for the support and collaboration.',
                image: 'https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png',
            },
            likes: 512,
            comments: 67,
            shares: 89,
            commentsList: [
                {
                    id: 'c10',
                    author: { name: 'Congratulator', avatar: 'https://i.pravatar.cc/32?img=30' },
                    text: 'Congratulations! 🎉',
                    timestamp: new Date(Date.now() - 82800000),
                    likes: 15,
                },
                {
                    id: 'c11',
                    author: { name: 'Team Lead', avatar: 'https://i.pravatar.cc/32?img=31' },
                    text: 'Proud of your achievement!',
                    timestamp: new Date(Date.now() - 79200000),
                    likes: 10,
                },
            ],
        },
    ];

    const [posts, setPosts] = useState(initialPosts);

    // current user (used to show avatar in comment box)
    const currentUser = {
        name: 'You',
        avatar: 'https://i.pravatar.cc/40?img=5',
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-3xl mx-auto px-4">
                <UploadPanel
                    onUpload={(file) => console.log('Uploaded file:', file.name)}
                    onGeneratePost={(generated) => {
                        // prepend generated post
                        setPosts((p) => [{ id: Date.now(), ...generated }, ...p]);
                    }}
                />

                <PostFeed
                    posts={posts}
                    currentUser={currentUser}
                    onLike={(postId) => console.log(`Liked post ${postId}`)}
                    onComment={(postId, text) => console.log(`Commented on post ${postId}:`, text)}
                    onShare={(postId) => console.log(`Shared post ${postId}`)}
                    onAddOption={(postId) => console.log(`Options clicked for post ${postId}`)}
                />
            </div>
        </div>
    );
};

export default Home;
