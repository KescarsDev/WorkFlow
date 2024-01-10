"use client"

import { useState } from "react";

interface UserProps {
    initial?: boolean
}

export default function userToggle  ({initial = false}: UserProps={}) {
    const [ value, setValue ] = useState<boolean>(initial)

    const toggle = () => {
        setValue(!value)
    }

    return {
        value,
        setValue,
        toggle
    }
}