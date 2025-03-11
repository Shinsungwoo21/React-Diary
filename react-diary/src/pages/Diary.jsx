import React from 'react'
import { useParams } from 'react-router-dom';

const Diary = () => {

  const { id } = useParams();

  return (
    <div>
      <p>{id}번 일기장입니다.</p>
    </div>
  )
}

export default Diary;
