'use client'

import { useState } from "react"
import SortableList, { SortableItem, SortableKnob } from "react-easy-sort"
import { ToolType } from "./types"

function createNewTool() {
  console.log("Create new tool")
  // TODO: Create a new tool
}

export default function ToolDropdown({ tools, className }: { tools: ToolType[], className?: string }) {
  const [rows, setRows] = useState<{ id: number; toolId: string }[]>([
    { id: 0, toolId: "" },
  ])
  const [nextId, setNextId] = useState(1)

  const canAddTool = (Boolean(rows[rows.length - 1].toolId))

  function onSortEnd(oldIndex: number, newIndex: number) {
    setRows((prev) => {
      const next = [...prev]
      const [moved] = next.splice(oldIndex, 1)

      if (!moved) return prev

      next.splice(newIndex, 0, moved)
      return next
    })
  }

  return (
    <section className={className}>
      <SortableList
        onSortEnd={onSortEnd}
        className="flex flex-wrap items-center gap-2"
        draggedItemClassName="opacity-50 [&_select]:hidden [&_.dragging-label]:inline-block"
      >
        {rows.map((row, index) => (
          <SortableItem key={row.id}>
            <div className="inline-flex items-center gap-1">
              {rows.length > 1 && <SortableKnob>
                <span
                  title="Drag to reorder"
                  className="cursor-grab active:cursor-grabbing select-none text-gray-500 hover:text-black"
                >
                  ⠿
                </span>
              </SortableKnob>}

              <select
                id={`toolId-${row.id}`}
                name={row.toolId ? "toolId" : undefined}
                required={index === 0 && Boolean(row.toolId)}
                value={row.toolId}
                onChange={(e) => {
                  const toolId = e.target.value

                  if (toolId === "new") {
                    createNewTool()
                    return
                  }
                  setRows((prev) =>
                    prev.map((item) => item.id === row.id ? { ...item, toolId: toolId } : item)
                  )
                }}
                className="w-auto shrink-0 px-1 border rounded-lg text-sm bg-gray-200"
              >
                <option value="" disabled>Choose tool</option>

                {tools.filter((tool) => !rows.some(
                      (other) => other.id !== row.id && other.toolId === String(tool.id)
                    )
                  )
                  .map((tool) => (
                    <option key={tool.id} value={String(tool.id)}>
                      {tool.name}
                    </option>
                  ))}

                <option value="new">New Tool</option>
              </select>

              <span className="dragging-label hidden w-25 shrink-0 truncate px-1 border rounded-lg text-sm bg-gray-200">
                {tools.find((tool) => String(tool.id) === row.toolId)?.name
                  ?? "Choose tool"}
              </span>

              {rows.length > 1 && <button
                type="button"
                onClick={() =>
                  setRows((prev) =>
                    prev.filter((item) => item.id !== row.id)
                  )
                }
                aria-label="Remove tool"
                className="text-gray-500 hover:text-red-500"
              >
                x
              </button>}
            </div>
          </SortableItem>
        ))}
      </SortableList>

      <button
        type="button"
        disabled={!canAddTool}
        onClick={() => {
          if (!canAddTool) return

          setRows((prev) => [...prev, { id: nextId, toolId: "" }])
          setNextId((prev) => prev + 1)
        }}
        className="mt-2 px-2 py-1 border rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        + Add tool
      </button>
    </section>
  )
}