import { useEffect } from "react";
import { Table } from "../../components/Table";
import { MainTemplate } from "../../templates/MainTemplate";

export const List = () => {

  useEffect(() => {
    document.title = 'List';
  }, [])

  return (
    <>
      <MainTemplate>
        <Table />
      </MainTemplate>
    </>
  );
}