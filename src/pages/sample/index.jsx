import React from 'react'
import { ModeToggle } from '../../components'

export const Sample = () => {
  return (
    <div>
        <div className="bg-background  text-primary rounded-lg p-4">
  This uses your custom theme!
</div>

<button className="bg-destructive text-destructive-foreground hover:bg-opacity-5 px-4 py-2 rounded-lg">
  Delete
</button>
<ModeToggle/>

    </div>
  )
}