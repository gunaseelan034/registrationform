import { Form, message, Modal, TimePicker } from "antd"
import moment from "moment";
import { useState } from "react";

import Calendar from "react-calendar"
import API from '../../../../services/index'


export const SheduleInterview = ({ isModalOpen, handleModalClose, getData, filters, id, studentData }) => {
    const [form] = Form.useForm();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);

    const onOk = (e) => {
        console.log(moment(selectedTime).format('DD'))
        form.validateFields().then((values) => {
            let formData = values;

            if (moment(selectedTime).format('HH') >= 10) {
                API.dashboard.sheduleInterview({
                    ...formData,
                    status: 'Interview',
                    id: id,
                    interview_date: selectedDate.toString(),
                    interview_time: moment(selectedTime).format('hh:mm:ss a').toString(),
                    studentData
                }).then(() => {
                    getData(filters);
                    message.success("Successfuly Updated");
                    handleModalClose()
                }).catch((err) => { message.error("error "); })
            } else {
                message.info('Assign the Interview On School Working Hour')
            }
        })
    }

    return (
        <>
            <Modal
                visible={isModalOpen}
                onCancel={handleModalClose}
                title='Schedule Interview'
                okText='Confirm'
                onOk={onOk}
            >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Form form={form}>
                        <Form.Item name='interview_date' rules={[{ required: true, message: 'Please input your Date!' }]}>
                            <Calendar
                                calendarType='ISO 8601'
                                showNavigation
                                onChange={(e) => setSelectedDate(e)} value={selectedDate}
                            />
                        </Form.Item>
                        <Form.Item name='interview_time' label='Select Time' rules={[{ required: true, message: 'Please input your Time!' }]}>
                            <TimePicker
                                onChange={(e) => { setSelectedTime(e) }}
                            />
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    )
}