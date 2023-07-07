import { Check, ChevronDown } from 'lucide-react';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from '@/components/common/ui/command';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/common/ui/popover';
import { useState } from 'react';
import { cls } from '@/utils/cls';

type DropdownQuestionProps = {
    id: string;
    options: {
        label: string;
        value: string;
    }[];
};

export const DropdownAnswers = ({ options }: DropdownQuestionProps) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    console.log(value);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button
                    aria-expanded={open}
                    className="focus:outline-none focus:border-primary-main border border-transparent hover:border-primary-main bg-gray-200 px-3 py-2 rounded-md w-[248px] flex items-center justify-between">
                    <span className="rtl:text-right text-sm ltr:text-left text-gray-600">
                        {value
                            ? options.find(option => option.value === value)?.label
                            : 'اختر اجابة...'}
                    </span>
                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </button>
            </PopoverTrigger>
            <PopoverContent className="w-[248px] p-0">
                <Command>
                    <CommandInput placeholder="البحث..." />
                    <CommandEmpty>لم يتم العثور على اجابة</CommandEmpty>
                    <CommandGroup>
                        {options.map(option => (
                            <CommandItem
                                key={option.value}
                                onSelect={() => {
                                    setValue(option.value === value ? '' : option.value);
                                    setOpen(false);
                                }}>
                                <Check
                                    className={cls(
                                        'rtl:ml-2 ltr:mr-2 h-4 w-4 text-primary-dark',
                                        value === option.value ? 'opacity-100' : 'opacity-0'
                                    )}
                                />
                                {option.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
};
