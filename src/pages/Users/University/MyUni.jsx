import { Table, Checkbox } from 'flowbite-react'
import { LayoutDashboard, Header } from "../../../components";
import { myUni } from '../../../constants/data'

export default function MyUni() {
  return (
    <LayoutDashboard>
      <Header category='User' title='Universities List' />
      <Table hoverable={true} className='w-4/5 h-screen mx-auto border-lg dark'>
      <Table.Head>
        <Table.HeadCell className="!p-4">
          <Checkbox />
        </Table.HeadCell>
        <Table.HeadCell>
          Name
        </Table.HeadCell>
        <Table.HeadCell>
          Fit
        </Table.HeadCell>
        <Table.HeadCell>
          State
        </Table.HeadCell>
        <Table.HeadCell>
          Division
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {myUni.map((uni, i) => (
          <Table.Row key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="!p-4">
            <Checkbox />
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {uni.name}
          </Table.Cell>
          <Table.Cell>
            <span className='p-3 bg-lime-600 text-md text-gray-100 rounded-full'>{uni.fit}</span>
          </Table.Cell>
          <Table.Cell className='text-white'>
            {uni.state}
          </Table.Cell>
          <Table.Cell>
            {uni.division}
          </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    </LayoutDashboard>
  )
}