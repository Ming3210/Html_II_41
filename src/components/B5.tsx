import React from 'react'

export default function B5() {
  return (
    <div>
        <h1>B5</h1>
        <div className="relative w-32 h-32 bg-slate-700">
  <p>Relative parent</p>
  <div className="absolute bottom-0 left-0 bg-amber-400">
    <p>Absolute child</p>
  </div>
</div>
    </div>
  )
}
