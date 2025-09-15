import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { memo } from "react";


export interface CallMeInputProps {

    name: string;
    id: string;
    label: string;
    type: 'text' | 'email' | 'tel' | 'textarea';
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const MemoizedLabel = memo(({ id, label }: { id: string, label: string }) => {
    return <Label htmlFor={id}>{label}</Label>
})

export default memo(function CallMeInput({

    name,
    id,
    label,
    type,
    placeholder,
    value,
    onChange
}: CallMeInputProps) {



    return (
        <div className="space-y-2">
            <MemoizedLabel id={id} label={label} />
            {type === "textarea"
                ? <Textarea
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required
                    className="min-h-[120px]"
                />
                : <Input
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required
                    type={type}
                />}
        </div>
    )
})
