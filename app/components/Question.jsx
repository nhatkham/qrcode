import React from 'react'

const Question = (props) => {
    return (
        <div>
            <h2 className='p-2 mb-3'>{props.name}</h2>
            <form action="#" method="post">

                <div className="flex space-x-4 justify-center mb-3">

                    <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="mx-1 h-9 w-9 rounded-full bg-red-500 hover:bg-red-600 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#f59e0b] transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(245,158,11,0.3),0_4px_18px_0_rgba(245,158,11,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(245,158,11,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(245,158,11,0.2),0_4px_18px_0_rgba(245,158,11,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(245,158,11,0.2),0_4px_18px_0_rgba(245,158,11,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(245,158,11,0.2),0_4px_18px_0_rgba(245,158,11,0.1)]"
                    >
                        1
                    </button>


                    <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="mx-1 h-9 w-9 rounded-full bg-red-400 hover:bg-red-500 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#f59e0b] transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-[0_8px_9px_-4px_rgba(245,158,11,0.3),0_4px_18px_0_rgba(245,158,11,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(245,158,11,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(245,158,11,0.2),0_4px_18px_0_rgba(245,158,11,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(245,158,11,0.2),0_4px_18px_0_rgba(245,158,11,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(245,158,11,0.2),0_4px_18px_0_rgba(245,158,11,0.1)]"
                    >
                        2
                    </button>


                    <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="mx-1 h-9 w-9 rounded-full bg-blue-300 hover:bg-blue-400 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#93c5fd] transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-blue-500 active:shadow-[0_8px_9px_-4px_rgba(147,197,253,0.3),0_4px_18px_0_rgba(147,197,253,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(147,197,253,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(147,197,253,0.2),0_4px_18px_0_rgba(147,197,253,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(147,197,253,0.2),0_4px_18px_0_rgba(147,197,253,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(147,197,253,0.2),0_4px_18px_0_rgba(147,197,253,0.1)]"
                    >
                        3
                    </button>


                    <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="mx-1 h-9 w-9 rounded-full bg-green-300 hover:bg-green-400 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#48bb78] transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-green-500 active:shadow-[0_8px_9px_-4px_rgba(72,187,120,0.3),0_4px_18px_0_rgba(72,187,120,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(72,187,120,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(72,187,120,0.2),0_4px_18px_0_rgba(72,187,120,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(72,187,120,0.2),0_4px_18px_0_rgba(72,187,120,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(72,187,120,0.2),0_4px_18px_0_rgba(72,187,120,0.1)]"
                    >
                        4
                    </button>


                    <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="mx-1 h-9 w-9 rounded-full bg-green-500 hover:bg-green-600 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#48bb78] transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(72,187,120,0.3),0_4px_18px_0_rgba(72,187,120,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(72,187,120,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(72,187,120,0.2),0_4px_18px_0_rgba(72,187,120,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(72,187,120,0.2),0_4px_18px_0_rgba(72,187,120,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(72,187,120,0.2),0_4px_18px_0_rgba(72,187,120,0.1)]"
                    >
                        5
                    </button>
                </div>


                <div className="relative mb-5" data-te-input-wrapper-init>
                    <textarea
                        className="peer shadow-md block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Optional comment ? type here"></textarea>
                    <label
                        for="exampleFormControlTextarea1"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >Comment</label>
                </div>

                <button
                    type="button"
                    class="inline-block text-xs rounded-full bg-primary px-6 pb-2 pt-2.5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Submit
                </button>

            </form>
        </div>
    )
}

export default Question