import { Helmet } from "react-helmet-async";
import Container from "../../components/ui/Container";
import { useEffect, useState } from "react";
import Card from "../Home/MatrimonyProfile/Card";
import CoverSection from "../../components/CoverSection/CoverSection";
import { getAllCandidates } from "../../api/candidate";

const Biodata = () => {

    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        getAllCandidates()
            .then(data => {
                setProfiles(data)
            })
    }, [])

    return (
        <>
            <Helmet>
                <title>Bio Data | Love Birds Matrimony</title>
            </Helmet>
            <CoverSection
                img={'https://i.ibb.co/qCFCfVC/cover-1.jpg'}
                title={'Profile All Candidate'}
                text={'Choose your soulmate in this platform'} />

            <Container>
                <div className="md:flex gap-10 mt-16 md:mt-32 mb-10 md:mb-20 font-inter">
                    <div className="md:w-1/6 mb-8 md:mb-0">
                        <div>
                            <h3 className="font-semibold bg-tertiary text-white py-2 text-center mb-4">Filter Section</h3>
                            <div>
                                <p className="text-lg mb-1">Biodata Type</p>
                                <p>
                                    <input type="checkbox" id="Man" name="man" value="Man" />
                                    <label htmlFor="Man" className="ml-2">Man</label>
                                </p>
                                <p>
                                    <input type="checkbox" id="Woman" name="woman" value="Woman" />
                                    <label htmlFor="Woman" className="ml-2">Woman</label>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-5/6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {
                                profiles?.slice(0, 6).map(profile => <Card
                                    key={profile._id}
                                    profile={profile}
                                />)
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Biodata;