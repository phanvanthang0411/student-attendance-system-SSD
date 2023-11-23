import { Link } from 'react-router-dom'
interface HeaderLoginProps {
    heading: string
    paragraph: string
    linkName: string
    linkUrl?: string
}
export default function HeaderLogin({ heading, paragraph, linkName, linkUrl = '#' }: HeaderLoginProps) {
    return (
        <div className='mb-10'>
            <div className='flex justify-center'>
                <img alt='' className='h-14 w-14' src='' />
            </div>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>{heading}</h2>
            <p className='mt-2 text-center text-sm text-gray-600 mt-1'>
                {paragraph}{' '}
                <Link to={linkUrl} className='font-medium text-purple-600 hover:text-purple-500'>
                    {linkName}
                </Link>
            </p>
        </div>
    )
}
