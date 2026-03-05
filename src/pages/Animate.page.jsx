import { useEffect, useRef, useState } from "react";
import { BigSquareIcon, DiscordIcon, MiddleSquareIcon, SmallSquareIcon } from "../assets/Icon";
import './Animate.css'

export function AnimatePage() {
    const [items, setItems] = useState([
        { id: 1, content: "This is a div illustrating a trail animation" },
        { id: 2, content: "This is a div illustrating a trail animation" },
        { id: 4, content: "This is a div illustrating a trail animation" },
        { id: 5, content: "This is a div illustrating a trail animation" },
        { id: 5, content: "This is a div illustrating a trail animation" },
        { id: 5, content: "This is a div illustrating a trail animation" },
        { id: 5, content: "This is a div illustrating a trail animation" },
    ]);

    const [is, setIs] = useState(0)
    const itemsParent = useRef(null)
    const itemsRef = useRef([])

    useEffect(() => {
        if (itemsRef.current && itemsParent.current) {
            console.dir(itemsParent.current.parentElement)

            itemsRef.current.forEach((e, i) => {
                if (is === 1 || is === 2) {
                    e.animate([
                        // Keyframes
                        // { transform: `translate(0, ${i * 57}px)`, width: '335px', height: '49px' },
                        { transform: `translate(${i * 57}px, 0)`, width: '49px', height: '49px' }
                    ], {
                        // Timing options
                        duration: 150,
                        fill: 'forwards',

                    });

                    e.lastChild.animate([
                        // { width: '100%', height: '44px', opacity: '1' },
                        { width: '100%', height: '44px', opacity: '0' },
                    ], {
                        duration: 150,
                        fill: 'forwards',
                    })


                }
                if (is === 0) {
                    e.animate([
                        // Keyframes
                        { transform: `translate(${i * 57}px, 0)`, width: '49px', height: '49px' },
                        { transform: `translate(0,${i * 57}px)`, width: '335px', height: '49px' }
                    ], {
                        // Timing options
                        duration: 150,
                        fill: 'forwards',

                    });
                    e.lastChild.animate([
                        { width: '100%', height: '44px', opacity: '0' },
                        { width: '100%', height: '44px', opacity: '1' },
                    ], {
                        duration: 300,
                        fill: 'forwards',
                    })
                }

            })

            if (is === 0) {
                itemsParent.current.parentElement.animate([
                    // Keyframes
                    { height: '278px', width: '365px', transform: 'translateX(0)' },
                ], {
                    // Timing options
                    duration: 150,
                    fill: 'forwards',

                });
            }
            if (is === 1) {
                itemsParent.current.parentElement.animate([
                    // Keyframes
                    { height: '79px ', width: '365px', transform: 'translateX(0)' },
                ], {
                    // Timing options
                    duration: 150,
                    fill: 'forwards',

                });
                itemsParent.current.parentElement.parentElement.animate([
                    // Keyframes
                    { height: '175px', width: '376px', },
                ], {
                    // Timing options
                    duration: 150,
                    fill: 'forwards',

                });
            }

            if (is === 0) {
                itemsParent.current.parentElement.parentElement.animate([
                    // Keyframes
                    { height: '278px', width: '376px', },
                    { height: '376px', width: '376px', },
                ], {
                    // Timing options
                    duration: 150,
                    fill: 'forwards',

                });
            }
            if (is === 2) {
                itemsParent.current.parentElement.animate([
                    // Keyframes
                    { height: '79px ', width: '365px', transform: 'translateX(100%)' },
                ], {
                    // Timing options
                    duration: 150,
                    fill: 'forwards',

                });
                itemsParent.current.parentElement.parentElement.animate([
                    // Keyframes
                    { height: '175px', width: '175px', },
                ], {
                    // Timing options
                    duration: 150,
                    fill: 'forwards',

                });
                itemsParent.current.parentElement.parentElement.firstChild.children[1].animate([
                    { opacity: '0' }
                ], {
                    duration: 150,
                    fill: 'forwards',
                })
                itemsParent.current.parentElement.parentElement.firstChild.children[2].animate([
                    { opacity: '1', }
                ], {
                    duration: 150,
                    fill: 'forwards',
                })
                itemsParent.current.parentElement.parentElement.firstChild.animate([
                    { width: '140px', }
                ], {
                    duration: 150,
                    fill: 'forwards',
                })
                itemsParent.current.parentElement.parentElement.firstChild.children[3].animate([
                    { transform: 'translateX(100%)' }
                ], {
                    duration: 150,
                    fill: 'forwards',
                })

                console.log(itemsParent.current.parentElement.parentElement.children[1])
                itemsParent.current.parentElement.parentElement.children[1].animate([
                    { left: '16px' }
                ], {
                    duration: 150,
                    fill: 'forwards',
                })
            } else {
                itemsParent.current.parentElement.parentElement.firstChild.children[1].animate([
                    { opacity: '1' }
                ], {
                    duration: 150,
                    fill: 'forwards',
                })

                itemsParent.current.parentElement.parentElement.firstChild.animate([
                    { width: '337px', }
                ], {
                    duration: 150,
                    fill: 'forwards',
                })

                itemsParent.current.parentElement.parentElement.firstChild.children[2].animate([
                    { opacity: '0', }
                ], {
                    duration: 150,
                    fill: 'forwards',
                })
                itemsParent.current.parentElement.parentElement.children[1].animate([
                    { left: '-100%' }
                ], {
                    duration: 150,
                    fill: 'forwards',
                })


                itemsParent.current.parentElement.parentElement.firstChild.children[3].animate([
                    { transform: 'translateX(0)' }
                ], {
                    duration: 150,
                    fill: 'forwards',
                })
            }
        }
    }, [is])

    return (
        <div className="containerr">
            <div className="container">
                <div className="profile">
                    <img
                        src="https://avatars.mds.yandex.net/i?id=013e197178043dfc7f5f9604a5ed936a7df7c2ee-8497233-images-thumbs&n=13" alt="" className="item_avatar" />
                    <div className="data_text">
                        <p className="username">Quillow</p>
                        <p className="user_members">100+ members</p>
                    </div>
                    <button className="btn another">
                        <DiscordIcon></DiscordIcon>
                    </button>
                    <button className="btn">
                        <DiscordIcon></DiscordIcon>
                        Join
                    </button>
                </div>
                <div className="data_left_text">
                    <p className="username">Quillow</p>
                    <p className="user_members">100+ members</p>
                </div>
                <div className="s_container">
                    <div className="soc_container" ref={itemsParent}>
                        {items.map((props, index) => (
                            <div key={items[index].id} onClick={(e) => {

                            }} className="item" ref={(el) => (itemsRef.current[index] = el)}>
                                <img src="https://avatars.mds.yandex.net/i?id=013e197178043dfc7f5f9604a5ed936a7df7c2ee-8497233-images-thumbs&n=13" alt="" className="item_avatar" />
                                <p className="item_content">{props.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="resize">
                <button className="resize_item" onClick={() => { setIs(0) }}>
                    <BigSquareIcon />
                </button>
                <button className="resize_item" onClick={() => { setIs(1) }}>
                    <MiddleSquareIcon />
                </button>
                <button className="resize_item" onClick={() => { setIs(2) }}>
                    <SmallSquareIcon />
                </button>
            </div>
        </div>
    );
}