import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            if (target.closest('a, button, input, [role="button"]')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseLeave = () => {
             setPosition({ x: -100, y: -100 });
        }
        
        window.addEventListener('mousemove', handleMouseMove);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // Spring animation settings for a responsive feel
    // FIX: Add 'as const' to ensure TypeScript infers the correct literal type for 'type'.
    // This resolves the error where 'string' is not assignable to 'AnimationGeneratorType'.
    const spring = {
        type: 'spring',
        stiffness: 500,
        damping: 30
    } as const;

    const ringVariants = {
        default: {
            x: position.x - 16,
            y: position.y - 16,
            width: 32,
            height: 32,
        },
        hover: {
            x: position.x - 32,
            y: position.y - 32,
            width: 64,
            height: 64,
        }
    };

    const dotVariants = {
        default: {
            opacity: 1,
            scale: 1,
        },
        hover: {
            opacity: 0,
            scale: 0,
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center bg-primary"
            variants={ringVariants}
            animate={isHovering ? 'hover' : 'default'}
            transition={spring}
        >
            <motion.div
                className="w-2 h-2 rounded-full bg-text-primary"
                variants={dotVariants}
                animate={isHovering ? 'hover' : 'default'}
                transition={spring}
            />
        </motion.div>
    );
};

export default CustomCursor;