'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { format } from "date-fns";
import Link from "next/link";
import { encode } from "punycode";

type FilterType = 'all' | 'issue' | 'suggestion' | 'other';

const filters: { id: FilterType, label: string }[] = [
  {
    id: 'all',
    label: 'All'
  },
  {
    id: 'issue',
    label: 'Issue'
  },
  {
    id: 'suggestion',
    label: 'Suggestion'
  },
  {
    id: 'other',
    label: 'Other'
  }
]

export default function ListFeedbacks({ feedbacks }: any) {
  const [filter, setFilter] = useState<FilterType>('all');
  const filteredFeedbacks = feedbacks.filter((f: any) => filter === 'all' || f.category === filter);

  return (
    <div className="flex gap-10">
      <div className="min-w-52 max-w-52 flex flex-col gap-2">
        {
          filters.map((f) => (
            <Button
              key={f.id}
              variant={'ghost'}
              className={cn('justify-between bg-gray-50 border border-transparent', { 'bg-gray-100 border-gray-200': filter === f.id })}
              onClick={() => setFilter(f.id)}>
              {f.label}
              <Badge variant="outline" className="w-fit px-1">
                {feedbacks.filter((fb: any) => f.id === 'all' || fb.category === f.id).length}
              </Badge>
            </Button>
          ))
        }
      </div>
      <div className="flex-1">
        <div className="grid grid-cols-2 gap-2">
          {
            filteredFeedbacks.map((f: any) => (
              <div key={f.id} className="group flex flex-col gap-2 p-4 border border-gray-200 rounded-md w-full relative">
                <Badge variant="outline" className="w-fit">{f.category}</Badge>
                <p className="font-semibold">{f.content}</p>
                <p className="font-light text-gray-500">
                  <span className="font-normal">Submitted At: </span>
                  {format(f.createdAt, 'PP')}
                </p>
                <p className="font-light text-gray-500 break-words">
                  <span className="font-normal">Source: </span>
                  {f.origin}
                </p>
                <p className="font-light text-gray-500">
                  <span className="font-normal">User: </span>
                  {f.userId}
                </p>
                {
                  f.userId !== 'null' && (
                    <Button size={'sm'} className="absolute bottom-2 right-2 w-fit invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100" asChild>
                      <Link href={`https://mail.google.com/mail/?view=cm&to=${f.userId}&su=RE:%20${encode(f.content)}`} target="_blank">
                        Reply to feedback
                      </Link>
                    </Button>
                  )
                }
              </div>
            ))
          }
        </div>
        <p>
          {feedbacks.length === 0
            ? 'No feedbacks!'
            : (filter !== 'all' && filteredFeedbacks.length === 0)
              ? 'No feedbacks with this filter!'
              : ''}
        </p>
      </div>
    </div >
  )
}