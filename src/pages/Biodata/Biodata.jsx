import { Helmet } from "react-helmet-async";
import Container from "../../components/ui/Container";
import { useEffect, useState } from "react";
import Card from "../Home/MatrimonyProfile/Card";
import CoverSection from "../../components/CoverSection/CoverSection";
import { getAllCandidates } from "../../api/candidate";
import DivisionSelect from "./DivisionSelect";

const Biodata = () => {

    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        getAllCandidates()
            .then(data => {
                setProfiles(data)
            })
    }, [])

    const handleFilterGender = genderText => {
        const text = genderText.target.value
        getAllCandidates()
            .then(data => {
                const filter = data.filter(item => item.gender === text)
                setProfiles(filter)
            })
    }

    const [valueDivision, setValueDivision] = useState(null)
    const text = valueDivision?.value;
    useEffect(() => {
        getAllCandidates()
            .then(data => {
                if (!text) {
                    setProfiles(data)
                }
                else {
                    const filterDivision = data.filter(item => item?.permanentAddress.toLocaleLowerCase().includes(text))
                    setProfiles(filterDivision)
                }
            })
    }, [text])


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
                                    <input onClick={handleFilterGender} type="radio" name="gender" value="male" />
                                    <label htmlFor="male" className="ml-2">Male</label>
                                </p>
                                <p>
                                    <input onClick={handleFilterGender} type="radio" name="gender" value="female" />
                                    <label htmlFor="female" className="ml-2">Female</label>
                                </p>
                            </div>
                            <div className="mt-3">
                                <p className="text-lg mb-1">Biodata By Division</p>
                                <DivisionSelect
                                    // onClick={handleFilterDivision}
                                    setValueDivision={setValueDivision}
                                    valueDivision={valueDivision}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-5/6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {
                                profiles.map((profile, idx) => <Card
                                    key={idx}
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