import React, { useState } from 'react';
import { bookingApi } from '../apis/Apis'; // Adjust the import path as necessary
import toast from 'react-hot-toast';
import './myAppointment.css'; // Ensure to include your custom styles

const AppointmentBooking = () => {
    const [studentName, setStudentName] = useState('');
    const [instructor, setInstructor] = useState('Mr Caleb Boadi');
    const [timeSlot, setTimeSlot] = useState('');
    const [reason, setReason] = useState('Project Help');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await bookingApi({
                studentName,
                instructor,
                timeSlot,
                reason,
                email,
            });

            toast.success(`Hi ${studentName}! Appointment Confirmed`);
        } catch (error) {
            console.error(error);
            toast.error('There was an error booking the appointment.');
        }
    };

    return (
        <div className="appointment-container d-flex justify-content-center align-items-center flex-column">
            <div className="card text-center mb-4" style={{ maxWidth: '700px', borderRadius: '15px', background: 'rgba(255, 255, 255, 0.8)' }}>
                <div className="card-body">
                    <h2 className="text-primary">
                        <i className="fas fa-calendar-check"></i> Book an Appointment
                    </h2>
                    <p className="card-text">Please fill out the form below to book your appointment.</p>
                </div>
            </div>

            <div className="card p-5 shadow-lg" style={{ maxWidth: '800px', width: '100%', borderRadius: '15px', background: 'rgba(255, 255, 255, 0.9)' }}>
                <form onSubmit={handleSubmit}>
                    <div className="row mb-4">
                        <div className="col-md-6 mb-3 mb-md-0">
                            <label className="form-label">
                                <i className="fas fa-user me-1"></i> Your Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                value={studentName}
                                onChange={(e) => setStudentName(e.target.value)}
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">
                                <i className="fas fa-envelope me-1"></i> Your Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-md-6 mb-3 mb-md-0">
                            <label className="form-label">
                                <i className="fas fa-chalkboard-teacher me-1"></i> Select Instructor
                            </label>
                            <div className="mb-3">
                                <select
                                    className="form-control"
                                    id="instructor"
                                    value={instructor}
                                    onChange={(e) => setInstructor(e.target.value)}
                                    style={{
                                        padding: '5px',
                                        borderRadius: '10px',
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        backgroundColor: '#fff',
                                        color: '#333',
                                        transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
                                    }}
                                >
                                    <option value="Mr Caleb Boadi">Mr Caleb Boadi</option>
                                    <option value="Dr Cesar Sanin">Dr Cesar Sanin</option>
                                    <option value="Prof Andrew Levula">Prof Andrew Levula</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">
                                <i className="fas fa-clock me-1"></i> Select Date and Time
                            </label>
                            <input
                                type="datetime-local"
                                className="form-control"
                                value={timeSlot}
                                onChange={(e) => setTimeSlot(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="form-label">
                            <i className="fas fa-comment-dots me-1"></i> Reason for Meeting
                        </label>
                        <div className="mb-3">
                            <select
                                className="form-control"
                                id="reason"
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                style={{
                                    padding: '5px',
                                    borderRadius: '10px',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
                                }}
                            >
                                <option value="Project Help">Project Help</option>
                                <option value="Course Guidance">Course Guidance</option>
                                <option value="Technical Issues">Technical Issues</option>
                                <option value="Lab Activity">Lab Activity</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 py-2">
                        Book Appointment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AppointmentBooking;
