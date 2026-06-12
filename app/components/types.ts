export type ChatMessage = {
    sender: "bot" | "user";
    text: string;
    time: string;
};

export type EnquiryFormData = {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    botTrap: string;
    agree: boolean;
};

export interface NavBarProps {
    isMobileMenuOpen: boolean;
    onToggleMobileMenu: () => void;
}

export interface FooterProps {
    copyToClipboard: (text: string) => void;
    isToastVisible: boolean;
    toastText: string;
}
