import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FC } from 'react';

export const ModalMenu: FC<{
    title?: string;
    submitName?: string;
    cancelName?: string;
    description?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    isOpen?: boolean;
    submitDisabled?: boolean;
    onOpenChange: (open: boolean) => void;
    onSubmit?: () => void;
}> = ({
    title,
    submitName,
    cancelName,
    description,
    children,
    footer,
    isOpen,
    submitDisabled,
    onOpenChange,
    onSubmit,
}) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
            <div className="bg-background opacity-100  rounded-lg p-6 max-w-md w-full mx-4 z-100 shadow-xl">
                <div className="flex items-center space-x-3 mb-4">
                    <div>
                        {title && (
                            <h3 className="text-lg font-semibold text-foreground">
                                {title}
                            </h3>
                        )}
                        {description && (
                            <p className="text-sm text-foreground/50">
                                {description}
                            </p>
                        )}
                    </div>
                </div>

                <div className="mb-6">
                    {/* <p className="text-gray-700">{message}</p>
                     */}
                    {children}
                </div>

                <DialogFooter>
                    {/* <div> */}
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                    >
                        {cancelName ? cancelName : 'Отмена'}
                    </Button>
                    {onSubmit && (
                        <Button
                            onClick={onSubmit}
                            variant="default"
                            disabled={submitDisabled}
                        >
                            {submitName ? submitName : 'Отправить'}
                        </Button>
                    )}
                    {/* </div> */}
                </DialogFooter>
            </div>
        </div>
    );
};
