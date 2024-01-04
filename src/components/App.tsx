import { ChangeEvent, useState, FC } from 'react'
import styled from 'styled-components'

export const App: FC = () => {
  const [text, setText] = useState<string>('')
  const [memos, setMemos] = useState<string[]>([])

  return <h1>簡単メモアプリ</h1>
}
