import { createPortal } from "react-dom";
import "./Modal.css";
import { useTheme } from '../../../shared/lib/theme/ThemeContext'

interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
    children: React.ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {

    if (!isOpen) return null;

    const modalRoot = document.getElementById("portal-root") as HTMLElement;

    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };

    const { theme } = useTheme();
    const class_modal = (theme === "dark") ? "modal_dark" : "modal";
    
    return createPortal(
        <div className="wrap" onClick={handleBackgroundClick}>
            <div className={class_modal}>
                {children}
            </div>
        </div>,
        modalRoot
    );
};