import { RichText as RichTextComponent } from '@graphcms/rich-text-react-renderer'
import { ComponentProps } from 'react'

type RichTextProps = ComponentProps<typeof RichTextComponent>

export const RichText = ({ ...props }: RichTextProps) => {
    return (
        <RichTextComponent 
            {...props}
            renderers={
                {
                    bold: ({children}) => (
                        <b className='text-gray-50 font-semibold'>{children}</b>
                    ),
                    ul: ({children}) => (
                      <ul className="list-disc list-inside pl-2 flex flex-col gap-1">{children}</ul>  
                    ),
                    a: ({children, ...props}) => (
                        <a {...props} className='hover:text-emerald-500 transition-colors underline'>
                            {children}
                        </a>
                    )
                }
            }
        />
    )
}