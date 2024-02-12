import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../../api/auth";
import { Helmet } from "react-helmet-async";
import UserDataRow from "../../../components/Dashboard/Sidebar/TableRows/UserDataRow";



const ManageUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => await getAllUsers(),
    })

    return (
        <>
            <div className='container mx-auto px-4 sm:px-8'>
                <Helmet>
                    <title>Manage Users</title>
                </Helmet>

                <div className='py-8 font-inter'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th scope='col'
                                            className='px-5 py-3 bg-tertiary text-white border-b border-gray-200 text-left text-sm uppercase font-medium'>
                                            Email
                                        </th>
                                        <th scope='col'
                                            className='px-5 py-3 bg-tertiary text-white border-b border-gray-200 text-left text-sm uppercase font-medium'>
                                            Role
                                        </th>
                                        <th scope='col'
                                            className='px-5 py-3 bg-tertiary text-white border-b border-gray-200 text-left text-sm uppercase font-medium'>
                                            Status
                                        </th>

                                        <th scope='col'
                                            className='px-5 py-3 bg-tertiary text-white border-b border-gray-200 text-left text-sm uppercase font-medium' >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* User data table row */}
                                    {
                                        users &&
                                        users?.map(user => <UserDataRow
                                            key={user._id}
                                            user={user}
                                            refetch={refetch} />)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageUsers;