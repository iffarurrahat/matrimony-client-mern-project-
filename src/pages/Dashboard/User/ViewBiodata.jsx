import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import { getProfileCandidates } from "../../../api/candidate";
import ProfileDataRow from "../../../components/Dashboard/Sidebar/TableRows/ProfileDataRow";
import TableCover from "../../../components/Cover/TableCover";
import { useQuery } from "@tanstack/react-query";

const ViewBiodata = () => {

    const { user } = useAuth();
    // const [profiles, setProfiles] = useState([]);
    // useEffect(() => {
    //     getProfileCandidates(user?.email)
    //         .then(data => setProfiles(data))
    // }, [user])

    const { data: profiles = [], refetch } = useQuery({
        queryKey: ['profiles'],
        queryFn: async () => await getProfileCandidates(user?.email),
    })



    return (
        <>
            <Helmet>
                <title>View Biodata | Dashboard</title>
            </Helmet>
            {
                profiles && profiles.length > 0 ?
                    <div className='container mx-auto px-4 sm:px-8'>
                        <div className='py-8'>
                            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                                <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                                    <table className='min-w-full leading-normal'>
                                        <thead>
                                            <tr>
                                                <th scope='col'
                                                    className='px-5 py-3 bg-tertiary text-white border-b border-gray-200 text-left text-sm uppercase font-medium'>
                                                    Image
                                                </th>
                                                <th scope='col'
                                                    className='px-5 py-3 bg-tertiary text-white border-b border-gray-200 text-left text-sm uppercase font-medium'>
                                                    Email
                                                </th>
                                                <th scope='col'
                                                    className='px-5 py-3 bg-tertiary text-white border-b border-gray-200 text-left text-sm uppercase font-medium'>
                                                    Birth Date
                                                </th>
                                                <th scope='col'
                                                    className='px-5 py-3 bg-tertiary text-white border-b border-gray-200 text-left text-sm uppercase font-medium' >
                                                    Delete
                                                </th>
                                                <th scope='col'
                                                    className='px-5 py-3 bg-tertiary text-white border-b border-gray-200 text-left text-sm uppercase font-medium' >
                                                    Update
                                                </th>
                                                <th scope='col'
                                                    className='px-5 py-3 bg-tertiary text-white border-b border-gray-200 text-left text-sm uppercase font-medium' >
                                                    Request For
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Room row data */}
                                            {

                                                profiles?.map(profile => <ProfileDataRow
                                                    key={profile._id}
                                                    profile={profile}
                                                    refetch={refetch} />)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        <TableCover
                            title={'Please create a profile then see data'}
                            text={'No profile data available'} />
                    </>
            }

        </>
    );
};

export default ViewBiodata;
