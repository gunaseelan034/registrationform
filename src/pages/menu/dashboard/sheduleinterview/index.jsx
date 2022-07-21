import { Form, message, Modal } from "antd"
import { useState } from "react";
import Calendar from "react-calendar"

import API from '../../../../services/index'

export const SheduleInterview = ({ isModalOpen, handleModalClose, getData, filters, id, studentData }) => {
    const [form] = Form.useForm();
    const [value, onChange] = useState(new Date());

    const onOk = (e) => {
        console.log(form.validateFields().then((values) => {
            let formData = values;
            API.dashboard.sheduleInterview({ ...formData, status: 'Interview', id: id, interview_date: value.toString(), studentData }).then(() => {
                getData(filters);
                message.success("Successfuly Updated");
                handleModalClose()
            }).catch((err) => { message.error("error "); })
        }))
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
                        <Form.Item name='interview_date'>
                            <Calendar
                                calendarType='ISO 8601'
                                showNavigation
                                onChange={onChange} value={value}
                            />
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    )
}