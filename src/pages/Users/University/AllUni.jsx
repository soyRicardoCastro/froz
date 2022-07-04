import { Table, Checkbox } from "flowbite-react";
import { LayoutDashboard, Header } from "../../../components";
// import { uni } from '../../../constants/data'

import { useQueryClient } from "react-query";
import { useUnis } from "../../../hooks/universities";

export default function AllUniversities() {
  const qC = useQueryClient();
  const { data: uni, error, isLoading, isFetching } = useUnis();

  if (isLoading)
    return (
      <LayoutDashboard>
        <Header category="Users" title="All Universities List" />
        <h1 className="h-screen ml-10 mt-10 text-white text-3xl">
          Loading data...
        </h1>
      </LayoutDashboard>
    );

  if (error)
    return (
      <LayoutDashboard>
        <Header category="Users" title="All Universities List" />
        <h1 className="text-white text-3xl py-60 my-60">Error...:/</h1>
      </LayoutDashboard>
    );

  return (
    <LayoutDashboard>
      <Header category="User" title="Universities List" cn="ml-5" />
      <Table hoverable={true} className="w-4/5 h-screen mx-auto border-lg dark">
        <Table.Head>
          <Table.HeadCell className="!p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>State</Table.HeadCell>
          <Table.HeadCell>Division</Table.HeadCell>
          <Table.HeadCell>Coach</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {uni.map((uni) => (
            <Table.Row
              key={uni.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="!p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {uni.name}
              </Table.Cell>
              <Table.Cell className="text-white">{uni.state}</Table.Cell>
              <Table.Cell className="text-gray-400">{uni.division}</Table.Cell>
              <Table.Cell>
                {uni.coach.map((item, i) => (
                  <div key={i} className="mb-2">
                    <div className="text-gray-400">{item.name}</div>
                    <div className="text-gray-200">{item.contact}</div>
                  </div>
                ))}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </LayoutDashboard>
  );
}
