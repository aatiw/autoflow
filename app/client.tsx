"use client"

import { getQueryClient } from "@/trpc/server"
import { dehydrate, HydrationBoundary, useSuspenseQuery } from "@tanstack/react-query"
import { Suspense } from "react"

export const Client = () => {
    const queryClient = getQueryClient();

    return (
        <div>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Suspense fallback={<p>loading...</p>}>
                    <Client />
                </Suspense>
            </HydrationBoundary>
        </div>
    )
}