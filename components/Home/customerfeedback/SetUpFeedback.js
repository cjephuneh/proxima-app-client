import React from 'react'
import FillContext from './FillContext'
import SelectContacts from './SelectContacts'
import VisualizeGeneratedQuestions from './VisualizeGeneratedQuestions'

function SetUpFeedback() {
  return (
    <div className='grid grid-cols-3 space-x-6 pt-8'>
        <FillContext />
        <VisualizeGeneratedQuestions />
        <SelectContacts />

    </div>
  )
}

export default SetUpFeedback