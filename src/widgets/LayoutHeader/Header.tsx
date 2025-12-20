import { useState } from 'react'
import styles from "./LayoutHeader.module.css";
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher.tsx'
import { Modal } from '../../shared/ui/Modal/Modal'
import { Button } from '../../shared/ui/Button/Button'
import { useTheme } from '../../shared/lib/theme/ThemeContext'

export function Header() {
  const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true); 
    const closeModal = () => setOpen(false); 
    const { theme } = useTheme();
  return (
    <header className={styles.header}>
      <ThemeSwitcher />
      <Button className={theme === "dark" ? styles.open_button_dark : styles.open_button} onClick={openModal}>О проекте</Button>
            <Modal isOpen={open} onClose={closeModal}>
              <h2>О проекте</h2>
                  <p><strong>Добро пожаловать на наш интенсив по React!</strong></p>
                  <p>Это вторая ступень при подготовке к поступлению в лабораторию Астон.</p>
                  <Button className={theme === "dark" ? styles.close_button_dark : styles.close_button} onClick={closeModal}>Закрыть</Button>
            </Modal>
      <h1>Cписок постов</h1>
    </header>
  );
};