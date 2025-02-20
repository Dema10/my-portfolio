import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const TypewriterText = () => {
    const text = "Web Developer.";
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (displayedText.length < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(text.slice(0, displayedText.length + 1));
            }, 200); // velocita di battitura
            return () => clearTimeout(timeout);
        }
    }, [displayedText]);

    return (
        <div className='flex items-center text-primary'>
            <motion.p>{displayedText}</motion.p>
            <motion.span
                animate={{
                    opacity: [1, 0],
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className='w-[30px] h-[60px] bg-primary ml-1'
            />
        </div>
    );
};

export default TypewriterText;