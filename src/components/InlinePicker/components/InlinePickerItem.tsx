import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { InlinePickerSize } from "../types"

export interface InlinePickerItemProps {
    id: number
    label: string
    onClick: (idNewTab: number) => void
    active?: boolean
    showDot?: boolean
    icon?:IconDefinition
    size: InlinePickerSize
}

export const InlinePickerItem = (props: InlinePickerItemProps) => {
    const { id, label, onClick, icon, active, showDot, size } = props

    const sizeClassMap:Record<InlinePickerSize, string> = {
        'sm': 'text-xs',
        'md': 'text-sm',
        'lg': 'text-base'
    }

    return (
        <li
            title={label}
            onClick={() => { onClick(id) }}
            className={`whitespace-nowrap relative w-full cursor-pointer text-lg rounded-lg px-2 py-0.5 text-center transition-colors duration-300 ${active ? 'text-primary' : 'text-neutral-400'} `}>  
            {icon && <FontAwesomeIcon icon={icon}/>}
            <p className={`${sizeClassMap[size]} text-center mx-auto w-full`}>{label}</p>
            {showDot && <span className='absolute right-8 top-1 size-1.5 rounded-full bg-primary'></span>} 
        </li>
    )
}