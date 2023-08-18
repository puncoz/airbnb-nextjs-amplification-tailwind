"use client"

import React, { FC, MouseEvent as MouseEventReact, useLayoutEffect, useRef } from "react"

export type ContextMenuOption = {
    name: string
    callback: () => void
}

type Props = {
    options: ContextMenuOption[],
    coordinates: {
        x: number
        y: number
    },
    contextMenu: boolean,
    setContextMenu: (state: boolean) => void
}
const ContextMenu: FC<Props> = ({ options, coordinates, contextMenu, setContextMenu }) => {
    const contextMenuRef = useRef<HTMLDivElement>(null)

    const handleClick = (e: MouseEventReact<HTMLLIElement>, callback: ContextMenuOption["callback"]) => {
        e.stopPropagation()

        callback()
    }

    useLayoutEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (contextMenuRef.current && !contextMenuRef.current.contains(e.target as Node)) {
                setContextMenu(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [setContextMenu])

    return (
        <div ref={contextMenuRef}
             style={{
                 boxShadow: "0 2px 5px 0 rgba(var(11,20,26),.26), 0 2px 10px 0 rgba(11,20,26;),.16)",
                 top: coordinates.y,
                 left: coordinates.x,
             }}
             className="bg-white shadow-2xl fixed py-5 z-[100] rounded-lg border border-gray-200">
            <ul>
                {options.map(({ name, callback }) => (
                    <li key={name}
                        className="hover:bg-gray-100 pl-5 pr-10 py-2 cursor-pointer"
                        onClick={e => handleClick(e, callback)}>
                        <span>{name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContextMenu
