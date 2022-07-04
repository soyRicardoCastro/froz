import { LayoutDashboard, Header } from "../../../components";
import { Table, Checkbox } from 'flowbite-react'

import { useQueryClient } from 'react-query'
import { useUsers } from '../../../hooks/users'

export default function AllUsers({ setUserId }) {
  const qC = useQueryClient()
  const {
    data: users,
    error,
    isLoading,
    isFetching
  } = useUsers()

  if (isLoading) return <LayoutDashboard>
    <Header category='Admin' title='All Users List' />
    <h1 className='h-screen ml-10 mt-10 text-white text-3xl'>Loading data...</h1>
  </LayoutDashboard>

  if (error) return <LayoutDashboard>
    <Header category='Admin' title='All Users List' />
    <h1 className='text-white text-3xl py-60 my-60'>Error...:/</h1>
  </LayoutDashboard>

  return (
    <LayoutDashboard>
      <Header category='Admin' title='All Users List' />
      {isFetching && <span className='text-sm text-white ml-10 mb-10'>Refreshing data...</span>}
      <Table hoverable={true} className='w-4/5 mx-auto border-lg dark'>
      <Table.Head>
        <Table.HeadCell className="!p-4">
          <Checkbox />
        </Table.HeadCell>
        <Table.HeadCell>
          Fullname
        </Table.HeadCell>
        <Table.HeadCell>
          Email
        </Table.HeadCell>
        <Table.HeadCell>
          Age
        </Table.HeadCell>
        <Table.HeadCell>
          Gender
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {users.map((user) => (
          <Table.Row key={user.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="!p-4">
            <Checkbox />
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {`${user.name} ${user.lastname}`}
          </Table.Cell>
          <Table.Cell>
            {user.email}
          </Table.Cell>
          <Table.Cell>
            {user.age}
          </Table.Cell>
          <Table.Cell>
            {user.gender}
          </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    </LayoutDashboard>
  )
}