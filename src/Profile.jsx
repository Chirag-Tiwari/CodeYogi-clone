import React from "react";
import Button from "./Button";
import Card from "./Card";
import ProfileBox from "./ProfileBox"

function Profile() {
    return (
        <div>
            <Card>
                <h1 className="text-lg font-medium leading-6 text-gray-900">Personal Details</h1>
                <ProfileBox>First Name<span className="text-red-500">*</span></ProfileBox>
                <ProfileBox>Last Name <span className="text-red-500"> (Skip only if you don't have it in official documents)</span></ProfileBox>
                <ProfileBox>Email address</ProfileBox>
                <ProfileBox><span className="text-red-500">*</span>Institute Name </ProfileBox>
                <ProfileBox type="date">Year Of Passout</ProfileBox>
                <ProfileBox>Phone Number<span className="text-red-500">*</span></ProfileBox>
                <ProfileBox type="date">Date Of Birth<span className="text-red-500">*</span></ProfileBox>
                <div className="mt-5 border-t border-gray-200 flex justify-between items-center pt-4">
                    <label htmlFor="device">Device you are using to do your assignments<span className="text-red-500">*</span></label>
                    <select className="w-full px-3 py-2 border border-gray-300 text-gray-900  bg-gray-50 w-2/3  rounded-md" id="device" name="cars">
                        <option value="mobile with keyboard">mobile with keyboard</option>
                        <option value="mobile without keyboard">mobile without keyboard</option>
                        <option value="Personal computer/laptop">Personal computer/laptop</option>
                        <option value="College computer/laptop">College computer/laptop</option>
                    </select>
                </div>
                <ProfileBox>Institute roll no.</ProfileBox>
                <ProfileBox>Branch</ProfileBox>
                <div className="mt-5 border-t border-gray-200 items-center pt-4">
                    <Button>Update</Button>
                </div>
            </Card>
        </div>
    );
}

export default Profile;