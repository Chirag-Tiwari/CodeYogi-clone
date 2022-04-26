import React from "react";
import Button from "./Button";
import Card from "./Card";
import ProfileBox from "./ProfileBox"

function ProfileLayout({ detail }) {
    return (
        <div>
            <Card>
                <h1 className="text-lg font-medium leading-6 text-gray-900">Personal Details</h1>
                <ProfileBox value={detail.first_name}>First Name<span className="text-red-500">*</span></ProfileBox>
                <ProfileBox value={detail.last_name}>Last Name <span className="text-red-500"> (Skip only if you don't have it in official documents)</span></ProfileBox>
                <ProfileBox value={detail.email}>Email address</ProfileBox>
                <ProfileBox value={detail.institute.name}><span className="text-red-500">*</span>Institute Name </ProfileBox>
                <ProfileBox value={detail.year_of_pass_out} type="date">Year Of Passout</ProfileBox>
                <ProfileBox value={detail.phone_no}>Phone Number<span className="text-red-500">*</span></ProfileBox>
                <ProfileBox value={detail.date_of_birth} type="date">Date Of Birth<span className="text-red-500">*</span></ProfileBox>
                <div className="mt-5 border-t border-gray-200 flex justify-between items-center pt-4">
                    <label htmlFor="device">Device you are using to do your assignments<span className="text-red-500">*</span></label>
                    <select className="w-full px-3 py-2 border border-gray-300 text-gray-900  bg-gray-50 w-2/3  rounded-md" id="device" name="cars">
                        <option value="mobile with keyboard">mobile with keyboard</option>
                        <option value="mobile without keyboard">mobile without keyboard</option>
                        <option value="Personal computer/laptop">Personal computer/laptop</option>
                        <option value="College computer/laptop">College computer/laptop</option>
                    </select>
                </div>
                <ProfileBox value={detail.institute_roll_no}>Institute roll no.</ProfileBox>
                <ProfileBox value={detail.branch}>Branch</ProfileBox>
                <div className="mt-5 border-t border-gray-200 items-center pt-4">
                    <Button>Update</Button>
                </div>
            </Card>
        </div>
    );
}

export default ProfileLayout;