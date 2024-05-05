import React from 'react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import {
    Button,
    Checkbox,
    Col,
    ColorPicker,
    Form,
    InputNumber,
    Radio,
    Rate,
    Row,
    Select,
    Slider,
    Space,
    Switch,
    Upload,
    Card
} from 'antd';

const { Option } = Select;

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const onFinish = (values) => {

    let number = Number(values.color) + Number(values.gender)+ Number(100 * values.switch)

    switch(number){
    case 11:
        console.log('Голодные игры');
    break;
    case 12:
        console.log('Посвященый');
    break;
    case 13:
        console.log('Эквиллибриум');
    break;
    case 21:
        console.log('Пятая волна');
    break;
    case 22:
        console.log('Бегущий в лабиринте');
    break;
    case 23:
        console.log('Поколение Вояджер');
    break;
    case 111:
        console.log('Дивергент');
    break;
    case 112:
        console.log('Шрек');
    break;
    case 113:
        console.log('Бегущий по лезвию 2049');
    break;
    case 121:
        console.log('Голодные игры');
    break;
    case 122:
        console.log('Шрек');
    break;
    case 123:
        console.log('Эквилибриум');
    break;
    }
};

const FormPage = () => (
    <div className='flex-column'>
        <span className="w-full flex justify-center align-center mb-3" style={{ fontSize: '18px', color: 'white' }}>Пожалуйста ответьте на форму</span>
        <Card style={{zIndex:10}} className='form-card flex-column align-center justify-center'>
            <Form
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                initialValues={{
                    'switch': false
                }}
                style={{ maxWidth: 600 }}
            >
                <Form.Item
                    name="color"
                    label="Цвет"
                    hasFeedback
                    rules={[{ required: true, message: 'Выберите свой любимый цвет!' }]}
                >
                    <Select placeholder="Выберите свой любимый цвет">
                        <Option value="1">Краный</Option>
                        <Option value="2">Зеленый</Option>
                        <Option value="3">Синий</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="gender"
                    label="Пол"
                    hasFeedback
                    rules={[{ required: true, message: 'Выберите пол!' }]}
                >
                    <Select placeholder="Выберите пол">
                        <Option value="10">Мужской</Option>
                        <Option value="20">Женский</Option>
                    </Select>
                </Form.Item>

                <Form.Item name="switch" label="Ограничение" valuePropName="checked">
                    <Switch checkedChildren="18+" unCheckedChildren="<18" />
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="reset">reset</Button>
                    </Space>
                </Form.Item>
            </Form>
        </Card>
    </div>
);

export default FormPage;