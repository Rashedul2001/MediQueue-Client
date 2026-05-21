import { BiCheckCircle } from "react-icons/bi"
import { FiAlertCircle, FiInfo } from "react-icons/fi"

export const successToast = (title, message) => {
    toast.success(
        <div className="flex flex-col gap-1">
            <span className="font-semibold text-white">{title}</span>
            <span className="text-xs text-text-secondary">{message}</span>
        </div>,
        { icon: <BiCheckCircle className="w-5 h-5 text-emerald-600 shrink-0" /> }
    )
}
export const errorToast = (title, message) => {
    toast.error(
        <div className="flex flex-col gap-1">
            <span className="font-semibold text-white">{title}</span>
            <span className="text-xs text-text-secondary">{message}</span>
        </div>,
        { icon: <FiAlertCircle className="w-5 h-5 text-rose-600 shrink-0" /> }
    )
}
export const infoToast = (title, message) => {
    toast.info(
        <div className="flex flex-col gap-1">
            <span className="font-semibold text-white">{title}</span>
            <span className="text-xs text-text-secondary">{message}</span>
        </div>,
        { icon: <FiInfo className="w-5 h-5 text-blue-600 shrink-0" /> }
    )
}