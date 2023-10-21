export interface CustomImageUploaderProps {
    handleLogoUpload: ([K]: any | null) => void;
    setLogoFile: (arg: any | null) => void;
    imagePath: string;
    setImagePath: (arg: string) => void;
    setIsDelete: (arg: boolean) => void;
    isDelete: boolean;
    handleRemoveLogo: () => void;
    loading?: boolean;
    title?: string;
    subtitle?: string;
}
