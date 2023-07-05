import { useRef } from "react";
import { cls } from "@/utils/cls";
import { motion } from "framer-motion";

type SidebarProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    className?: string
}

export function Sidebar({ isOpen, setIsOpen, children, className }: SidebarProps) {
    const sidebarRef = useRef(null);

    const navAnimation = {
        open: {
            width: "16rem",
            transition: {
                damping: 40,
            },
        },
        closed: {
            width: "0rem",
            transition: {
                damping: 40,
            },
        },
    }

    return (
        <div>
            <div
                onClick={() => setIsOpen(false)}
                className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${isOpen ? "block" : "hidden"}`}
            />
            <motion.div
                ref={sidebarRef}
                animate={isOpen ? "open" : "closed"}
                variants={navAnimation}
                initial={{ x: 0 }}
                className={cls("h-screen fixed right-0 top-0 bg-white text-gray shadow-xl z-[999] max-w-[16rem] w-[16rem] overflow-hidden md:hidden", className)}
            >
                {children}
            </motion.div>
        </div>
    );
};

