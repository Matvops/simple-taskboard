import { useEffect } from "react"
import { Steps } from "../../components/Steps"
import { MainTemplate } from "../../templates/MainTemplate"


export const Board = () => {

  useEffect(() => {
    document.title = 'Board';
  }, [])

  return (
    <>
      <MainTemplate>
        <Steps />
      </MainTemplate>
    </>
  )
}