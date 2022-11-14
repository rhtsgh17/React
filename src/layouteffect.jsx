import { useLayoutEffect, useEffect } from "react";

export default function LayoutEffectTutorial () {
    useLayoutEffect (() => {
        console.log ("useLayoutEffect");
    }, []);

    useEffect (() => {
        console.log ("useEffect");
    }, []);

    return <div></div>
}