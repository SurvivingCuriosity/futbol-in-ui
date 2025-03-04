import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export interface InlinePickerItemProps {
    id: number
    label: string
    onClick: (idNewTab: number) => void
    active?: boolean
    showDot?: boolean
    icon?:IconDefinition
}

export const InlinePickerItem = (props: InlinePickerItemProps) => {
    const { id, label, onClick, icon, active, showDot } = props

    return (
        <li
            title={label}
            onClick={() => { onClick(id) }}
            className={`whitespace-nowrap relative w-full cursor-pointer text-lg rounded-lg px-2 py-0.5 text-center transition-colors duration-300 ${active ? 'text-primary' : 'text-neutral-400'} `}>  
            {icon && <FontAwesomeIcon icon={icon}/>}
            {label}
            {showDot && <span className='absolute right-8 top-1 size-1.5 rounded-full bg-primary'></span>} 
        </li>
    )
}