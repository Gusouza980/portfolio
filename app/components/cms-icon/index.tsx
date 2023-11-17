type CMSIconProps = {
    icon: string
}

export const CmsIcon = ({icon}: CMSIconProps) => {
    return (
        <div className="w-8 h-8" dangerouslySetInnerHTML={{__html: icon}} />
    )
}