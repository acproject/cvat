/* eslint-disable */

const aboutDummyData = {
    "name": "Computer Vision Annotation Tool",
    "description": "CVAT is completely re-designed and re-implemented version of Video Annotation Tool from Irvine, California tool. It is free, online, interactive video and image annotation tool for computer vision. It is being used by our team to annotate million of objects with different properties. Many UI and UX decisions are based on feedbacks from professional data annotation team.",
    "version": "0.5.dev20190516142240"
}

const formatsDummyData = [{
    "id": 1,
    "dumpers": [
        {
            "display_name": "CVAT for video 1.1",
            "format": "XML",
            "version": "1.1",
            "handler": "dump_as_cvat_interpolation"
        },
        {
            "display_name": "CVAT for images 1.1",
            "format": "XML",
            "version": "1.1",
            "handler": "dump_as_cvat_annotation"
        }
    ],
    "loaders": [
        {
            "display_name": "CVAT 1.1",
            "format": "XML",
            "version": "1.1",
            "handler": "load"
        }
    ],
    "name": "CVAT",
    "created_date": "2019-08-08T12:18:56.571488+03:00",
    "updated_date": "2019-08-08T12:18:56.571533+03:00",
    "handler_file": "cvat/apps/annotation/cvat.py",
    "owner": null
},
{
    "id": 2,
    "dumpers": [
        {
            "display_name": "PASCAL VOC ZIP 1.0",
            "format": "ZIP",
            "version": "1.0",
            "handler": "dump"
        }
    ],
    "loaders": [
        {
            "display_name": "PASCAL VOC ZIP 1.0",
            "format": "ZIP",
            "version": "1.0",
            "handler": "load"
        }
    ],
    "name": "PASCAL VOC",
    "created_date": "2019-08-08T12:18:56.625025+03:00",
    "updated_date": "2019-08-08T12:18:56.625071+03:00",
    "handler_file": "cvat/apps/annotation/pascal_voc.py",
    "owner": null
},
{
    "id": 3,
    "dumpers": [
        {
            "display_name": "YOLO ZIP 1.0",
            "format": "ZIP",
            "version": "1.0",
            "handler": "dump"
        }
    ],
    "loaders": [
        {
            "display_name": "YOLO ZIP 1.0",
            "format": "ZIP",
            "version": "1.0",
            "handler": "load"
        }
    ],
    "name": "YOLO",
    "created_date": "2019-08-08T12:18:56.667534+03:00",
    "updated_date": "2019-08-08T12:18:56.667578+03:00",
    "handler_file": "cvat/apps/annotation/yolo.py",
    "owner": null
}];

const usersDummyData = {
    "count": 2,
    "next": null,
    "previous": null,
    "results": [
        {
            "url": "http://localhost:7000/api/v1/users/1",
            "id": 1,
            "username": "admin",
            "first_name": "",
            "last_name": "",
            "email": "admin@dummy.com",
            "groups": [
                "admin"
            ],
            "is_staff": true,
            "is_superuser": true,
            "is_active": true,
            "last_login": "2019-05-17T11:53:05.961434+03:00",
            "date_joined": "2019-05-13T15:33:17.833200+03:00"
        },
        {
            "url": "http://localhost:7000/api/v1/users/2",
            "id": 2,
            "username": "bsekache",
            "first_name": "",
            "last_name": "",
            "email": "",
            "groups": [
                "user",
                "observer"
            ],
            "is_staff": false,
            "is_superuser": false,
            "is_active": true,
            "last_login": "2019-05-16T13:07:19.564241+03:00",
            "date_joined": "2019-05-16T13:05:57+03:00"
        }
    ]
}

const shareDummyData = [
    {
        "name": "images",
        "type": "DIR",
        "children": [
            {
                "name": "image000001.jpg",
                "type": "REG"
            },
            {
                "name": "nowy-jork-time-sqare.jpg",
                "type": "REG"
            },
            {
                "name": "123123.jpg",
                "type": "REG"
            },
            {
                "name": "ws_Oasis-night_1920x1200.jpg",
                "type": "REG"
            },
            {
                "name": "image000002.jpg",
                "type": "REG"
            },
            {
                "name": "fdgdfgfd.jpg",
                "type": "REG"
            },
            {
                "name": "bbbbb.jpg",
                "type": "REG"
            },
            {
                "name": "gdfgdfgdf.jpg",
                "type": "REG"
            }
        ]
    },
    {
        "name": "2.avi",
        "type": "REG"
    },
    {
        "name": "data",
        "type": "DIR",
        "children": [],
    },
    {
        "name": "out.MOV",
        "type": "REG"
    },
    {
        "name": "bbbbb.jpg",
        "type": "REG"
    }
]

const tasksDummyData = {
    "count": 5,
    "next": null,
    "previous": null,
    "results": [
        {
            "url": "http://localhost:7000/api/v1/tasks/102",
            "id": 102,
            "name": "Test",
            "size": 1,
            "mode": "annotation",
            "owner": 1,
            "assignee": null,
            "bug_tracker": "",
            "created_date": "2019-09-05T11:59:22.987942Z",
            "updated_date": "2019-09-05T14:04:07.569344Z",
            "overlap": 0,
            "segment_size": 0,
            "z_order": false,
            "status": "annotation",
            "labels": [{
                "id": 5,
                "name": "car",
                "attributes": []
            }],
            "segments": [{
                "start_frame": 0,
                "stop_frame": 0,
                "jobs": [{
                    "url":"http://localhost:7000/api/v1/jobs/112",
                    "id": 112,
                    "assignee":null,
                    "status":"annotation"
                }]
            }],
            "image_quality": 50,
            "start_frame": 0,
            "stop_frame": 0,
            "frame_filter": ""
        }, {
            "url": "http://localhost:7000/api/v1/tasks/100",
            "id": 100,
            "name": "Image Task",
            "size": 9,
            "mode": "annotation",
            "owner": 1,
            "assignee": null,
            "bug_tracker": "",
            "created_date": "2019-06-18T13:05:08.941304+03:00",
            "updated_date": "2019-07-16T15:51:29.142871+03:00",
            "overlap": 0,
            "segment_size": 0,
            "z_order": false,
            "status": "annotation",
            "labels": [
               {
                  "id": 1,
                  "name": "car,",
                  "attributes": [

                  ]
               },
               {
                  "id": 2,
                  "name": "person",
                  "attributes": [

                  ]
               }
            ],
            "segments": [
               {
                  "start_frame": 0,
                  "stop_frame": 8,
                  "jobs": [
                     {
                        "url": "http://localhost:7000/api/v1/jobs/100",
                        "id": 100,
                        "assignee": null,
                        "status": "annotation"
                     }
                  ]
               }
            ],
            "image_quality": 50,
            "start_frame": 0,
            "stop_frame": 0,
            "frame_filter": ""
        },
        {
            "url": "http://localhost:7000/api/v1/tasks/10",
            "id": 101,
            "name": "Video Task",
            "size": 5002,
            "mode": "interpolation",
            "owner": 1,
            "assignee": null,
            "bug_tracker": "",
            "created_date": "2019-06-21T16:34:49.199691+03:00",
            "updated_date": "2019-07-12T16:43:58.904892+03:00",
            "overlap": 5,
            "segment_size": 500,
            "z_order": false,
            "status": "annotation",
            "labels": [
               {
                  "id": 22,
                  "name": "bicycle",
                  "attributes":[
                     {
                        "id": 13,
                        "name": "driver",
                        "mutable": false,
                        "input_type": "radio",
                        "default_value": "man",
                        "values": [
                           "man",
                           "woman"
                        ]
                     },
                     {
                        "id": 14,
                        "name": "sport",
                        "mutable": true,
                        "input_type": "checkbox",
                        "default_value": "false",
                        "values": [
                           "false"
                        ]
                     }
                  ]
               },
               {
                  "id": 21,
                  "name": "car",
                  "attributes": [
                     {
                        "id": 10,
                        "name": "model",
                        "mutable": false,
                        "input_type": "select",
                        "default_value": "__undefined__",
                        "values": [
                           "__undefined__",
                           "bmw",
                           "mazda",
                           "suzuki",
                           "kia"
                        ]
                     },
                     {
                        "id": 11,
                        "name": "driver",
                        "mutable": false,
                        "input_type": "select",
                        "default_value": "__undefined__",
                        "values": [
                           "__undefined__",
                           "man",
                           "woman"
                        ]
                     },
                     {
                        "id": 12,
                        "name": "parked",
                        "mutable": true,
                        "input_type": "checkbox",
                        "default_value": "true",
                        "values": [
                           "true"
                        ]
                     }
                  ]
               },
               {
                  "id": 20,
                  "name": "face",
                  "attributes": [
                     {
                        "id": 6,
                        "name": "age",
                        "mutable": false,
                        "input_type": "select",
                        "default_value": "__undefined__",
                        "values": [
                           "__undefined__",
                           "skip",
                           "baby (0-5)",
                           "child (6-12)",
                           "adolescent (13-19)",
                           "adult (20-45)",
                           "middle-age (46-64)",
                           "old (65-)"
                        ]
                     },
                     {
                        "id": 7,
                        "name": "glass",
                        "mutable": false,
                        "input_type": "select",
                        "default_value": "__undefined__",
                        "values": [
                           "__undefined__",
                           "skip",
                           "no",
                           "sunglass",
                           "transparent",
                           "other"
                        ]
                     },
                     {
                        "id": 8,
                        "name": "beard",
                        "mutable": false,
                        "input_type": "select",
                        "default_value": "__undefined__",
                        "values": [
                           "__undefined__",
                           "skip",
                           "no",
                           "yes"
                        ]
                     },
                     {
                        "id": 9,
                        "name": "race",
                        "mutable": false,
                        "input_type": "select",
                        "default_value": "__undefined__",
                        "values": [
                           "__undefined__",
                           "skip",
                           "asian",
                           "black",
                           "caucasian",
                           "other"
                        ]
                     }
                  ]
               },
               {
                  "id": 23,
                  "name": "motorcycle",
                  "attributes": [
                     {
                        "id": 15,
                        "name": "model",
                        "mutable": false,
                        "input_type": "text",
                        "default_value": "unknown",
                        "values": [
                           "unknown"
                        ]
                     }
                  ]
               },
               {
                  "id": 19,
                  "name": "person, pedestrian",
                  "attributes": [
                     {
                        "id": 1,
                        "name": "action",
                        "mutable": true,
                        "input_type": "select",
                        "default_value": "__undefined__",
                        "values": [
                           "__undefined__",
                           "sitting",
                           "raising_hand",
                           "standing"
                        ]
                     },
                     {
                        "id": 2,
                        "name": "age",
                        "mutable": false,
                        "input_type": "number",
                        "default_value": "1",
                        "values": [
                           "1",
                           "100",
                           "1"
                        ]
                     },
                     {
                        "id": 3,
                        "name": "gender",
                        "mutable" :false,
                        "input_type": "select",
                        "default_value": "male",
                        "values": [
                           "male",
                           "female"
                        ]
                     },
                     {
                        "id": 4,
                        "name": "false positive",
                        "mutable": false,
                        "input_type": "checkbox",
                        "default_value": "false",
                        "values": [
                           "false"
                        ]
                     },
                     {
                        "id": 5,
                        "name": "clother",
                        "mutable": true,
                        "input_type": "text",
                        "default_value": "non, initialized",
                        "values": [
                           "non, initialized"
                        ]
                     }
                  ]
               },
               {
                  "id": 24,
                  "name": "road",
                  "attributes": [

                  ]
               }
            ],
            "segments": [
               {
                  "start_frame": 0,
                  "stop_frame": 499,
                  "jobs": [
                     {
                        "url": "http://localhost:7000/api/v1/jobs/10",
                        "id": 101,
                        "assignee": null,
                        "status": "annotation"
                     }
                  ]
               },
               {
                  "start_frame": 495,
                  "stop_frame": 994,
                  "jobs": [
                     {
                        "url": "http://localhost:7000/api/v1/jobs/11",
                        "id": 102,
                        "assignee": null,
                        "status": "annotation"
                     }
                  ]
               },
               {
                  "start_frame": 990,
                  "stop_frame": 1489,
                  "jobs": [
                     {
                        "url": "http://localhost:7000/api/v1/jobs/12",
                        "id": 103,
                        "assignee": null,
                        "status": "annotation"
                     }
                  ]
               },
               {
                  "start_frame": 1485,
                  "stop_frame": 1984,
                  "jobs": [
                     {
                        "url": "http://localhost:7000/api/v1/jobs/13",
                        "id": 104,
                        "assignee": null,
                        "status": "annotation"
                     }
                  ]
               },
               {
                  "start_frame": 1980,
                  "stop_frame": 2479,
                  "jobs": [
                     {
                        "url": "http://localhost:7000/api/v1/jobs/14",
                        "id": 105,
                        "assignee": null,
                        "status": "annotation"
                     }
                  ]
               },
               {
                  "start_frame": 2475,
                  "stop_frame": 2974,
                  "jobs": [
                     {
                        "url": "http://localhost:7000/api/v1/jobs/15",
                        "id": 106,
                        "assignee": null,
                        "status": "annotation"
                     }
                  ]
               },
               {
                  "start_frame": 2970,
                  "stop_frame": 3469,
                  "jobs": [
                     {
                        "url": "http://localhost:7000/api/v1/jobs/16",
                        "id": 107,
                        "assignee": null,
                        "status": "annotation"
                     }
                  ]
               },
               {
                  "start_frame": 3465,
                  "stop_frame": 3964,
                  "jobs": [
                     {
                        "url": "http://localhost:7000/api/v1/jobs/17",
                        "id": 108,
                        "assignee": null,
                        "status": "annotation"
                     }
                  ]
               },
               {
                  "start_frame": 3960,
                  "stop_frame": 4459,
                  "jobs": [
                     {
                        "url": "http://localhost:7000/api/v1/jobs/18",
                        "id": 109,
                        "assignee": null,
                        "status": "annotation"
                     }
                  ]
               },
               {
                  "start_frame": 4455,
                  "stop_frame": 4954,
                  "jobs": [
                     {
                        "url": "http://localhost:7000/api/v1/jobs/19",
                        "id": 110,
                        "assignee": null,
                        "status": "annotation"
                     }
                  ]
               },
               {
                  "start_frame": 4950,
                  "stop_frame": 5001,
                  "jobs": [
                     {
                        "url": "http://localhost:7000/api/v1/jobs/20",
                        "id": 111,
                        "assignee": null,
                        "status": "annotation"
                     }
                  ]
               }
            ],
            "image_quality": 50,
            "start_frame": 0,
            "stop_frame": 5001,
            "frame_filter": ""
        },
        {
            "url": "http://localhost:7000/api/v1/tasks/3",
            "id": 3,
            "name": "Test Task",
            "size": 5002,
            "mode": "interpolation",
            "owner": 2,
            "assignee": null,
            "bug_tracker": "",
            "created_date": "2019-05-16T13:08:00.621747+03:00",
            "updated_date": "2019-05-16T13:08:00.621797+03:00",
            "overlap": 5,
            "segment_size": 5000,
            "z_order": true,
            "flipped": false,
            "status": "annotation",
            "labels": [
                {
                    "id": 16,
                    "name": "bicycle",
                    "attributes": [
                        {
                            "id": 43,
                            "name": "driver",
                            "mutable": false,
                            "input_type": "radio",
                            "default_value": "man",
                            "values": [
                                "man",
                                "woman"
                            ]
                        },
                        {
                            "id": 44,
                            "name": "sport",
                            "mutable": true,
                            "input_type": "checkbox",
                            "default_value": "false",
                            "values": [
                                "false"
                            ]
                        }
                    ]
                },
                {
                    "id": 15,
                    "name": "car",
                    "attributes": [
                        {
                            "id": 40,
                            "name": "model",
                            "mutable": false,
                            "input_type": "select",
                            "default_value": "__undefined__",
                            "values": [
                                "__undefined__",
                                "bmw",
                                "mazda",
                                "suzuki",
                                "kia"
                            ]
                        },
                        {
                            "id": 41,
                            "name": "driver",
                            "mutable": false,
                            "input_type": "select",
                            "default_value": "__undefined__",
                            "values": [
                                "__undefined__",
                                "man",
                                "woman"
                            ]
                        },
                        {
                            "id": 42,
                            "name": "parked",
                            "mutable": true,
                            "input_type": "checkbox",
                            "default_value": "true",
                            "values": [
                                "true"
                            ]
                        }
                    ]
                },
                {
                    "id": 14,
                    "name": "face",
                    "attributes": [
                        {
                            "id": 36,
                            "name": "age",
                            "mutable": false,
                            "input_type": "select",
                            "default_value": "__undefined__",
                            "values": [
                                "__undefined__",
                                "skip",
                                "baby (0-5)",
                                "child (6-12)",
                                "adolescent (13-19)",
                                "adult (20-45)",
                                "middle-age (46-64)",
                                "old (65-)"
                            ]
                        },
                        {
                            "id": 37,
                            "name": "glass",
                            "mutable": false,
                            "input_type": "select",
                            "default_value": "__undefined__",
                            "values": [
                                "__undefined__",
                                "skip",
                                "no",
                                "sunglass",
                                "transparent",
                                "other"
                            ]
                        },
                        {
                            "id": 38,
                            "name": "beard",
                            "mutable": false,
                            "input_type": "select",
                            "default_value": "__undefined__",
                            "values": [
                                "__undefined__",
                                "skip",
                                "no",
                                "yes"
                            ]
                        },
                        {
                            "id": 39,
                            "name": "race",
                            "mutable": false,
                            "input_type": "select",
                            "default_value": "__undefined__",
                            "values": [
                                "__undefined__",
                                "skip",
                                "asian",
                                "black",
                                "caucasian",
                                "other"
                            ]
                        }
                    ]
                },
                {
                    "id": 17,
                    "name": "motorcycle",
                    "attributes": [
                        {
                            "id": 45,
                            "name": "model",
                            "mutable": false,
                            "input_type": "text",
                            "default_value": "unknown",
                            "values": [
                                "unknown"
                            ]
                        }
                    ]
                },
                {
                    "id": 13,
                    "name": "person, pedestrian",
                    "attributes": [
                        {
                            "id": 31,
                            "name": "action",
                            "mutable": true,
                            "input_type": "select",
                            "default_value": "__undefined__",
                            "values": [
                                "__undefined__",
                                "sitting",
                                "raising_hand",
                                "standing"
                            ]
                        },
                        {
                            "id": 32,
                            "name": "age",
                            "mutable": false,
                            "input_type": "number",
                            "default_value": "1",
                            "values": [
                                "1",
                                "100",
                                "1"
                            ]
                        },
                        {
                            "id": 33,
                            "name": "gender",
                            "mutable": false,
                            "input_type": "select",
                            "default_value": "male",
                            "values": [
                                "male",
                                "female"
                            ]
                        },
                        {
                            "id": 34,
                            "name": "false positive",
                            "mutable": false,
                            "input_type": "checkbox",
                            "default_value": "false",
                            "values": [
                                "false"
                            ]
                        },
                        {
                            "id": 35,
                            "name": "clother",
                            "mutable": true,
                            "input_type": "text",
                            "default_value": "non, initialized",
                            "values": [
                                "non, initialized"
                            ]
                        }
                    ]
                },
                {
                    "id": 18,
                    "name": "road",
                    "attributes": []
                }
            ],
            "segments": [
                {
                    "start_frame": 0,
                    "stop_frame": 4999,
                    "jobs": [
                        {
                            "url": "http://localhost:7000/api/v1/jobs/3",
                            "id": 3,
                            "assignee": null,
                            "status": "annotation"
                        }
                    ]
                },
                {
                    "start_frame": 4995,
                    "stop_frame": 5001,
                    "jobs": [
                        {
                            "url": "http://localhost:7000/api/v1/jobs/4",
                            "id": 4,
                            "assignee": null,
                            "status": "annotation"
                        }
                    ]
                }
            ],
            "image_quality": 50
        },
        {
            "url": "http://localhost:7000/api/v1/tasks/2",
            "id": 2,
            "name": "Video",
            "size": 75,
            "mode": "interpolation",
            "owner": 1,
            "assignee": null,
            "bug_tracker": "",
            "created_date": "2019-05-15T11:40:19.487999+03:00",
            "updated_date": "2019-05-15T16:58:27.992785+03:00",
            "overlap": 5,
            "segment_size": 0,
            "z_order": false,
            "flipped": false,
            "status": "annotation",
            "labels": [
                {
                    "id": 10,
                    "name": "bicycle",
                    "attributes": [
                        {
                            "id": 28,
                            "name": "driver",
                            "mutable": false,
                            "input_type": "radio",
                            "default_value": "man",
                            "values": [
                                "man",
                                "woman"
                            ]
                        },
                        {
                            "id": 29,
                            "name": "sport",
                            "mutable": true,
                            "input_type": "checkbox",
                            "default_value": "false",
                            "values": [
                                "false"
                            ]
                        }
                    ]
                },
                {
                    "id": 9,
                    "name": "car",
                    "attributes": [
                        {
                            "id": 25,
                            "name": "model",
                            "mutable": false,
                            "input_type": "select",
                            "default_value": "__undefined__",
                            "values": [
                                "__undefined__",
                                "bmw",
                                "mazda",
                                "suzuki",
                                "kia"
                            ]
                        },
                        {
                            "id": 26,
                            "name": "driver",
                            "mutable": false,
                            "input_type": "select",
                            "default_value": "__undefined__",
                            "values": [
                                "__undefined__",
                                "man",
                                "woman"
                            ]
                        },
                        {
                            "id": 27,
                            "name": "parked",
                            "mutable": true,
                            "input_type": "checkbox",
                            "default_value": "true",
                            "values": [
                                "true"
                            ]
                        }
                    ]
                },
                {
                    "id": 8,
                    "name": "face",
                    "attributes": [
                        {
                            "id": 21,
                            "name": "age",
                            "mutable": false,
                            "input_type": "select",
                            "default_value": "__undefined__",
                            "values": [
                                "__undefined__",
                                "skip",
                                "baby (0-5)",
                                "child (6-12)",
                                "adolescent (13-19)",
                                "adult (20-45)",
                                "middle-age (46-64)",
                                "old (65-)"
                            ]
                        },
                        {
                            "id": 22,
                            "name": "glass",
                            "mutable": false,
                            "input_type": "select",
                            "default_value": "__undefined__",
                            "values": [
                                "__undefined__",
                                "skip",
                                "no",
                                "sunglass",
                                "transparent",
                                "other"
                            ]
                        },
                        {
                            "id": 23,
                            "name": "beard",
                            "mutable": false,
                            "input_type": "select",
                            "default_value": "__undefined__",
                            "values": [
                                "__undefined__",
                                "skip",
                                "no",
                                "yes"
                            ]
                        },
                        {
                            "id": 24,
                            "name": "race",
                            "mutable": false,
                            "input_type": "select",
                            "default_value": "__undefined__",
                            "values": [
                                "__undefined__",
                                "skip",
                                "asian",
                                "black",
                                "caucasian",
                                "other"
                            ]
                        }
                    ]
                },
                {
                    "id": 11,
                    "name": "motorcycle",
                    "attributes": [
                        {
                            "id": 30,
                            "name": "model",
                            "mutable": false,
                            "input_type": "text",
                            "default_value": "unknown",
                            "values": [
                                "unknown"
                            ]
                        }
                    ]
                },
                {
                    "id": 7,
                    "name": "person, pedestrian",
                    "attributes": [
                        {
                            "id": 16,
                            "name": "action",
                            "mutable": true,
                            "input_type": "select",
                            "default_value": "__undefined__",
                            "values": [
                                "__undefined__",
                                "sitting",
                                "raising_hand",
                                "standing"
                            ]
                        },
                        {
                            "id": 17,
                            "name": "age",
                            "mutable": false,
                            "input_type": "number",
                            "default_value": "1",
                            "values": [
                                "1",
                                "100",
                                "1"
                            ]
                        },
                        {
                            "id": 18,
                            "name": "gender",
                            "mutable": false,
                            "input_type": "select",
                            "default_value": "male",
                            "values": [
                                "male",
                                "female"
                            ]
                        },
                        {
                            "id": 19,
                            "name": "false positive",
                            "mutable": false,
                            "input_type": "checkbox",
                            "default_value": "false",
                            "values": [
                                "false"
                            ]
                        },
                        {
                            "id": 20,
                            "name": "clother",
                            "mutable": true,
                            "input_type": "text",
                            "default_value": "non, initialized",
                            "values": [
                                "non, initialized"
                            ]
                        }
                    ]
                },
                {
                    "id": 12,
                    "name": "road",
                    "attributes": []
                }
            ],
            "segments": [
                {
                    "start_frame": 0,
                    "stop_frame": 74,
                    "jobs": [
                        {
                            "url": "http://localhost:7000/api/v1/jobs/2",
                            "id": 2,
                            "assignee": null,
                            "status": "annotation"
                        }
                    ]
                }
            ],
            "image_quality": 50
        },
        {
            "url": "http://localhost:7000/api/v1/tasks/1",
            "id": 1,
            "name": "Labels Set",
            "size": 9,
            "mode": "annotation",
            "owner": 1,
            "assignee": null,
            "bug_tracker": "http://bugtracker.com/issue12345",
            "created_date": "2019-05-13T15:35:29.871003+03:00",
            "updated_date": "2019-05-15T11:20:55.770587+03:00",
            "overlap": 0,
            "segment_size": 0,
            "z_order": true,
            "flipped": false,
            "status": "annotation",
            "labels": [
                {
                    "id": 4,
                    "name": "bicycle",
                    "attributes": [
                        {
                            "id": 13,
                            "name": "driver",
                            "mutable": false,
                            "input_type": "radio",
                            "default_value": "man",
                            "values": [
                                "man",
                                "woman"
                            ]
                        },
                        {
                            "id": 14,
                            "name": "sport",
                            "mutable": true,
                            "input_type": "checkbox",
                            "default_value": "false",
                            "values": [
                                "false"
                            ]
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "car",
                    "attributes": [
                        {
                            "id": 10,
                            "name": "model",
                            "mutable": false,
                            "input_type": "select",
                            "default_value": "__undefined__",
                            "values": [
                                "__undefined__",
                                "bmw",
                                "mazda",
                                "suzuki",
                                "kia"
                            ]
                        },
                        {
                            "id": 11,
                            "name": "driver",
                            "mutable": false,
                            "input_type": "select",
                            "default_value": "__undefined__",
                            "values": [
                                "__undefined__",
                                "man",
                                "woman"
                            ]
                        },
                        {
                            "id": 12,
                            "name": "parked",
                            "mutable": true,
                            "input_type": "checkbox",
                            "default_value": "true",
                            "values": [
                                "true"
                            ]
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "face",
                    "attributes": [
                        {
                            "id": 6,
                            "name": "age",
                            "mutable": false,
                            "input_type": "select",
                            "default_value": "__undefined__",
                            "values": [
                                "__undefined__",
                                "skip",
                                "baby (0-5)",
                                "child (6-12)",
                                "adolescent (13-19)",
                                "adult (20-45)",
                                "middle-age (46-64)",
                                "old (65-)"
                            ]
                        },
                        {
                            "id": 7,
                            "name": "glass",
                            "mutable": false,
                            "input_type": "select",
                            "default_value": "__undefined__",
                            "values": [
                                "__undefined__",
                                "skip",
                                "no",
                                "sunglass",
                                "transparent",
                                "other"
                            ]
                        },
                        {
                            "id": 8,
                            "name": "beard",
                            "mutable": false,
                            "input_type": "select",
                            "default_value": "__undefined__",
                            "values": [
                                "__undefined__",
                                "skip",
                                "no",
                                "yes"
                            ]
                        },
                        {
                            "id": 9,
                            "name": "race",
                            "mutable": false,
                            "input_type": "select",
                            "default_value": "__undefined__",
                            "values": [
                                "__undefined__",
                                "skip",
                                "asian",
                                "black",
                                "caucasian",
                                "other"
                            ]
                        }
                    ]
                },
                {
                    "id": 5,
                    "name": "motorcycle",
                    "attributes": [
                        {
                            "id": 15,
                            "name": "model",
                            "mutable": false,
                            "input_type": "text",
                            "default_value": "unknown",
                            "values": [
                                "unknown"
                            ]
                        }
                    ]
                },
                {
                    "id": 1,
                    "name": "person, pedestrian",
                    "attributes": [
                        {
                            "id": 1,
                            "name": "action",
                            "mutable": true,
                            "input_type": "select",
                            "default_value": "__undefined__",
                            "values": [
                                "__undefined__",
                                "sitting",
                                "raising_hand",
                                "standing"
                            ]
                        },
                        {
                            "id": 2,
                            "name": "age",
                            "mutable": false,
                            "input_type": "number",
                            "default_value": "1",
                            "values": [
                                "1",
                                "100",
                                "1"
                            ]
                        },
                        {
                            "id": 3,
                            "name": "gender",
                            "mutable": false,
                            "input_type": "select",
                            "default_value": "male",
                            "values": [
                                "male",
                                "female"
                            ]
                        },
                        {
                            "id": 4,
                            "name": "false positive",
                            "mutable": false,
                            "input_type": "checkbox",
                            "default_value": "false",
                            "values": [
                                "false"
                            ]
                        },
                        {
                            "id": 5,
                            "name": "clother",
                            "mutable": true,
                            "input_type": "text",
                            "default_value": "non, initialized",
                            "values": [
                                "non, initialized"
                            ]
                        }
                    ]
                },
                {
                    "id": 6,
                    "name": "road",
                    "attributes": []
                }
            ],
            "segments": [
                {
                    "start_frame": 0,
                    "stop_frame": 8,
                    "jobs": [
                        {
                            "url": "http://localhost:7000/api/v1/jobs/1",
                            "id": 1,
                            "assignee": null,
                            "status": "annotation"
                        }
                    ]
                }
            ],
            "image_quality": 95
        }
    ]
}

const taskAnnotationsDummyData = {
    '112': {
        "version":21,
        "tags": [],
        "shapes": [{
            "type": "rectangle",
            "occluded": false,
            "z_order": 1,
            "points": [
                557.7890625,
                276.2216796875,
                907.1888732910156,
                695.5014038085938
            ],
            "id": 15,
            "frame": 0,
            "label_id": 5,
            "group": 0,
            "attributes": []
        }],
        "tracks": [{
            "id": 15,
            "frame": 0,
            "label_id": 5,
            "group": 0,
            "shapes": [{
                "type": "rectangle",
                "occluded": false,
                "z_order": 13,
                "points": [
                    792.787109375,
                    16.5234375,
                    1171.1027526855469,
                    521.3458862304688
                ],
                "id": 22,
                "frame": 0,
                "outside": false,
                "attributes": []
            }],
            "attributes": []
        }]
    },
    '101': {
        "version":21,
        "tags":[],
        "shapes":[],
        "tracks":[
           {
                "id": 25,  // interpolation
                "frame": 10,
                "label_id": 19,
                "group": 0,
                "shapes": [{
                    "type": "polygon",
                    "occluded": false,
                    "z_order": 2,
                    "points": [
                        377.64912280702083,
                        458.5473684210556,
                        383.82456140351314,
                        458.5473684210556,
                        406.98245614035477,
                        455.45964912281124,
                        431.6842105263204,
                        455.45964912281124,
                        457.92982456140817,
                        455.45964912281124,
                        482.6315789473738,
                        455.45964912281124,
                        508.87719298246157,
                        455.45964912281124,
                        535.1228070175493,
                        455.45964912281124,
                        559.8245614035113,
                        455.45964912281124,
                        587.6140350877249,
                        455.45964912281124,
                        620.0350877193014,
                        455.45964912281124,
                        640.1052631578968,
                        455.45964912281124,
                        664.8070175438625,
                        453.9157894736891,
                        692.5964912280724,
                        450.8280701754411,
                        721.9298245614082,
                        450.8280701754411,
                        743.5438596491258,
                        447.74035087719676,
                        769.7894736842136,
                        446.1964912280746,
                        796.0350877193014,
                        446.1964912280746,
                        823.8245614035113,
                        446.1964912280746,
                        846.9824561403548,
                        446.1964912280746,
                        876.3157894736869,
                        446.1964912280746,
                        905.6491228070226,
                        446.1964912280746,
                        931.8947368421104,
                        446.1964912280746,
                        959.6842105263204,
                        446.1964912280746,
                        987.4736842105303,
                        446.1964912280746,
                        1015.2631578947403,
                        446.1964912280746,
                        1039.964912280706,
                        446.1964912280746,
                        1066.2105263157937,
                        446.1964912280746,
                        1090.9122807017593,
                        446.1964912280746,
                        1115.614035087725,
                        446.1964912280746,
                        1138.7719298245647,
                        449.28421052631893,
                        1231.4000000000015,
                        413.8000000000011,
                        1180.4561403508815,
                        467.81052631579223,
                        1180.4561403508815,
                        494.05614035088,
                        1180.4561403508815,
                        520.3017543859678,
                        1180.4561403508815,
                        545.0035087719334,
                        1180.4561403508815,
                        571.2491228070212,
                        1180.4561403508815,
                        597.494736842109,
                        1180.4561403508815,
                        620.6526315789524,
                        1180.4561403508815,
                        649.9859649122845,
                        1180.4561403508815,
                        676.2315789473723,
                        1180.4561403508815,
                        699.3894736842158,
                        1180.4561403508815,
                        727.1789473684257,
                        1180.4561403508815,
                        747.2491228070212,
                        1180.4561403508815,
                        771.9508771929868,
                        1180.4561403508815,
                        802.8280701754411,
                        1180.4561403508815,
                        830.6175438596547,
                        1180.4561403508815,
                        853.7754385964945,
                        1180.4561403508815,
                        880.0210526315823,
                        1183.5438596491258,
                        901.6350877193036,
                        1183.5438596491258,
                        929.4245614035135,
                        1186.6315789473738,
                        952.5824561403533,
                        1188.175438596496,
                        975.7403508771968,
                        1188.175438596496,
                        1001.9859649122845,
                        1188.175438596496,
                        1023.6000000000022,
                        1188.175438596496,
                        1057.5649122807044,
                        1186.6315789473738,
                        1082.26666666667,
                        1186.6315789473738,
                        1108.5122807017578,
                        1186.6315789473738,
                        1133.2140350877235,
                        1175.82421875,
                        1154.828125,
                        1155.7543859649159,
                        1156.371929824567,
                        1132.5964912280724,
                        1154.828070175441,
                        1106.3508771929846,
                        1154.828070175441,
                        1078.5614035087747,
                        1154.828070175441,
                        1053.8596491228127,
                        1150.1964912280746,
                        1030.7017543859693,
                        1148.6526315789524,
                        1002.9122807017593,
                        1148.6526315789524,
                        982.8421052631602,
                        1148.6526315789524,
                        953.5087719298281,
                        1147.1087719298303,
                        922.6315789473738,
                        1147.1087719298303,
                        891.7543859649159,
                        1147.1087719298303,
                        868.5964912280724,
                        1147.1087719298303,
                        839.2631578947403,
                        1147.1087719298303,
                        816.1052631578968,
                        1147.1087719298303,
                        786.7719298245647,
                        1147.1087719298303,
                        760.5263157894769,
                        1147.1087719298303,
                        735.8245614035113,
                        1147.1087719298303,
                        708.0350877193014,
                        1142.47719298246,
                        684.8771929824616,
                        1140.933333333338,
                        658.6315789473738,
                        1140.933333333338,
                        633.9298245614082,
                        1140.933333333338,
                        607.6842105263204,
                        1139.3894736842158,
                        581.4385964912326,
                        1134.7578947368456,
                        559.8245614035113,
                        1133.2140350877235,
                        535.1228070175493,
                        1131.6701754386013,
                        505.7894736842136,
                        1131.6701754386013,
                        482.6315789473738,
                        1131.6701754386013,
                        454.8421052631602,
                        1130.1263157894791,
                        430.1403508771964,
                        1130.1263157894791,
                        405.4385964912326,
                        1130.1263157894791,
                        383.82421875,
                        1130.126953125,
                        382.28070175438916,
                        1113.143859649128,
                        380.736842105267,
                        1088.4421052631624,
                        380.736842105267,
                        1056.0210526315823,
                        380.736842105267,
                        1026.6877192982502,
                        379.1929824561448,
                        1005.0736842105289,
                        374.5614035087765,
                        978.8280701754411,
                        371.47368421053034,
                        949.494736842109,
                        371.47368421053034,
                        921.705263157899,
                        371.47368421053034,
                        897.0035087719334,
                        371.47368421053034,
                        866.1263157894791,
                        371.47368421053034,
                        842.9684210526357,
                        371.47368421053034,
                        810.5473684210556,
                        371.47368421053034,
                        778.1263157894791,
                        377.64912280702083,
                        751.8807017543913,
                        380.736842105267,
                        722.5473684210556,
                        385.3684210526353,
                        693.2140350877235,
                        385.3684210526353,
                        668.5122807017578,
                        386.9122807017575,
                        643.8105263157922,
                        388.45614035088147,
                        619.1087719298266,
                        388.45614035088147,
                        591.3192982456167,
                        388.45614035088147,
                        563.5298245614067,
                        388.45614035088147,
                        535.7403508771968,
                        388.45614035088147,
                        511.03859649123115,
                        386.9122807017575,
                        487.88070175439134
                    ],
                    "id":382,
                    "frame":10,
                    "outside":false,
                    "attributes": [{
                        "spec_id":1,
                        "value":"__undefined__"
                    }, {
                        "spec_id":5,
                        "value":"non, initialized"
                    }]
                    }, {
                    "type": "polygon",
                    "occluded": false,
                    "z_order": 2,
                    "points": [
                        502.701171875,
                        1093.07421875,
                        860.8771929824616,
                        443.10877192982844,
                        1462.9824561403548,
                        1120.8631578947425
                    ],
                    "id": 383,
                    "frame": 20,
                    "outside": false,
                    "attributes": []
                }, {
                    "type": "polygon",
                    "occluded": false,
                    "z_order": 2,
                    "points": [
                        502.701171875,
                        1093.07421875,
                        860.8771929824616,
                        443.10877192982844,
                        1462.9824561403548,
                        1120.8631578947425
                    ],
                    "id": 384,
                    "frame": 22,
                    "outside": true,
                    "attributes": []
                }],
                "attributes": [{
                    "spec_id": 2,
                    "value": "1"
                }, {
                    "spec_id": 3,
                    "value": "male"
                }, {
                    "spec_id": 4,
                    "value": "false"
                }]
            },
            {
                "id": 60,
                "frame": 0,
                "label_id": 19,
                "group": 0,
                "shapes": [{
                    "type": "rectangle",
                    "occluded": false,
                    "z_order": 1,
                    "points": [
                       425.58984375,
                       540.298828125,
                       755.9765625,
                       745.6328125
                    ],
                    "id": 379,
                    "frame": 0,
                    "outside": false,
                    "attributes": [
                        {
                            "spec_id":5,
                            "value":"non, initialized"
                        },
                        {
                            "spec_id":1,
                            "value":"__undefined__"
                        }
                    ]
                }, {
                    "type": "rectangle",
                    "occluded": false,
                    "z_order": 1,
                    "points": [
                        238.8000000000011,
                        498.6000000000022,
                        546.01171875,
                        660.720703125
                    ],
                    "id": 380,
                    "frame": 10,
                    "outside": false,
                    "attributes": []
                }, {
                    "type":"rectangle",
                    "occluded":false,
                    "z_order":1,
                    "points":[
                       13.3955078125,
                       447.650390625,
                       320.6072265624989,
                       609.7710937499978
                    ],
                    "id":381,
                    "frame":20,
                    "outside":false,
                    "attributes":[

                    ]
                }],
                "attributes":[
                {
                    "spec_id":2,
                    "value":"1"
                },
                {
                    "spec_id":3,
                    "value":"male"
                },
                {
                    "spec_id":4,
                    "value":"false"
                }]
            }
        ]
    },
    '100': {
        "version": 16,
        "tags": [],
        "shapes": [{
            "type": "rectangle",
            "occluded": false,
            "z_order": 1,
            "points": [
                387.91,
                403.81,
                595.14,
                712.25
            ],
            "id": 108,
            "frame": 0,
            "label_id": 1,
            "group": 0,
            "attributes": []
        }, {
            "type": "rectangle",
            "occluded": false,
            "z_order": 2,
            "points": [
                783.12,
                368.91,
                990.35,
                677.34
            ],
            "id": 109,
            "frame": 0,
            "label_id": 1,
            "group": 0,
            "attributes": []
        }, {
            "type": "rectangle",
            "occluded": false,
            "z_order": 3,
            "points": [
                1277.1,
                239.99,
                1484.33,
                548.43
            ],
            "id": 110,
            "frame": 0,
            "label_id": 1,
            "group": 0,
            "attributes": []
        }, {
            "type": "rectangle",
            "occluded": false,
            "z_order": 4,
            "points": [
                1420.48,
                713.49,
                1627.71,
                1021.92
            ],
            "id": 111,
            "frame": 0,
            "label_id": 1,
            "group": 0,
            "attributes":[

            ]
        }, {
            "type": "rectangle",
            "occluded": false,
            "z_order": 5,
            "points": [
                896.38,
                659.27,
                1103.61,
                967.71
            ],
            "id": 112,
            "frame": 0,
            "label_id": 1,
            "group": 0,
            "attributes": []
        }, {
            "type": "polygon",
            "occluded": false,
            "z_order": 6,
            "points": [
                449.36,
                892.97,
                449.36,
                892.97,
                468.63,
                913.46,
                495.14,
                933.94,
                527.67,
                955.62,
                562.61,
                973.7,
                589.12,
                983.34,
                613.21,
                988.15,
                632.49,
                991.77,
                656.59,
                994.18,
                686.71,
                994.18,
                733.69,
                980.93,
                772.25,
                959.24,
                809.6,
                927.91,
                837.31,
                896.59,
                851.77,
                867.67,
                861.41,
                841.17,
                862.61,
                805.02,
                840.92,
                759.24,
                802.37,
                720.68,
                777.07,
                703.82,
                750.56,
                690.56,
                726.47,
                684.54,
                698.75,
                680.92,
                681.89,
                680.92,
                656.59,
                680.92,
                633.69,
                683.33,
                608.39,
                690.56,
                578.27,
                706.22,
                548.15,
                718.27,
                518.03,
                730.32,
                486.71,
                743.57,
                458.99,
                756.83,
                434.9,
                766.47,
                408.39,
                777.31,
                381.89,
                786.95,
                354.17,
                794.18,
                331.28,
                800.2,
                295.14,
                803.82,
                283.09,
                800.2,
                267.43,
                783.33,
                255.38,
                766.47,
                232.49,
                733.94,
                220.44,
                713.45,
                212.0,
                688.15,
                208.39,
                666.47,
                210.8,
                647.19
            ],
            "id": 113,
            "frame": 0,
            "label_id": 1,
            "group": 0,
            "attributes":[]
        }, {
            "type": "polygon",
            "occluded": false,
            "z_order": 7,
            "points": [
                1260.84,
                344.81,
                1260.84,
                344.81,
                1280.11,
                365.29,
                1306.62,
                385.78,
                1339.15,
                407.46,
                1374.09,
                425.53,
                1400.6,
                435.17,
                1424.69,
                439.99,
                1443.97,
                443.61,
                1468.07,
                446.02,
                1498.19,
                446.02,
                1545.18,
                432.76,
                1583.73,
                411.08,
                1621.08,
                379.75,
                1648.79,
                348.43,
                1663.25,
                319.51,
                1672.89,
                293.0,
                1674.09,
                256.86,
                1652.41,
                211.08,
                1613.85,
                172.52,
                1588.55,
                155.65,
                1562.04,
                142.4,
                1537.95,
                136.38,
                1510.24,
                132.76,
                1493.37,
                132.76,
                1468.07,
                132.76,
                1445.18,
                135.17,
                1419.87,
                142.4,
                1389.75,
                158.06,
                1359.63,
                170.11,
                1329.51,
                182.16,
                1298.19,
                195.41,
                1270.48,
                208.67,
                1246.38,
                218.3,
                1219.87,
                229.15,
                1193.37,
                238.79,
                1165.66,
                246.02,
                1142.76,
                252.04,
                1106.62,
                255.65,
                1094.57,
                252.04,
                1078.91,
                235.17,
                1066.86,
                218.3,
                1043.97,
                185.77,
                1031.92,
                165.29,
                1023.49,
                139.99,
                1019.87,
                118.3,
                1022.28,
                99.03
            ],
            "id": 114,
            "frame": 0,
            "label_id": 1,
            "group": 0,
            "attributes": []
        }, {
            "type": "polygon",
            "occluded": false,
            "z_order": 8,
            "points": [
                1113.21,
                723.09,
                1322.86,
                1018.28,
                1562.62,
                873.7,
                1587.92,
                641.16,
                1267.43,
                530.32
            ],
            "id": 115,
            "frame": 0,
            "label_id": 1,
            "group": 0,
            "attributes": []
        }, {
            "type": "polyline",
            "occluded": false,
            "z_order": 9,
            "points": [
                268.63,
                359.23,
                277.07,
                344.78,
                292.73,
                325.5,
                312.01,
                311.04,
                331.28,
                300.2,
                349.36,
                295.38,
                375.86,
                290.56,
                387.91,
                290.56,
                418.03,
                290.56,
                439.72,
                292.97,
                457.79,
                295.38,
                492.73,
                301.4,
                525.26,
                306.22,
                534.9,
                306.22,
                571.04,
                296.58,
                591.53,
                284.54,
                610.8,
                272.49,
                640.92,
                253.21,
                655.38,
                238.75
            ],
            "id": 116,
            "frame": 0,
            "label_id": 1,
            "group": 0,
            "attributes": []
        }, {
            "type": "points",
            "occluded": false,
            "z_order": 10,
            "points": [
                1089.12,
                505.02,
                1178.28,
                543.57,
                1074.66,
                602.61,
                1109.6,
                680.92,
                1172.25,
                631.53,
                1036.11,
                576.1,
                1057.79,
                445.98,
                1185.51,
                400.2
            ],
            "id": 117,
            "frame": 0,
            "label_id": 1,
            "group": 0,
            "attributes": [

            ]
        }, {
            "type": "rectangle",
            "occluded": false,
            "z_order": 11,
            "points": [
                1565.03,
                555.62,
                1787.92,
                765.26
            ],
            "id": 118,
            "frame": 0,
            "label_id": 1,
            "group": 0,
            "attributes": []
        }, {
            "type": "rectangle",
            "occluded": false,
            "z_order": 0,
            "points": [
                0.0,
                0.0,
                100.0,
                100.0
            ],
            "id": 119,
            "frame": 1,
            "label_id": 1,
            "group": 0,
            "attributes": []
        }, {
            "type": "polygon",
            "occluded": false,
            "z_order": 0,
            "points": [
                0.0,
                0.0,
                200.0,
                0.0,
                100.0,
                200.0
            ],
            "id": 120,
            "frame": 1,
            "label_id": 2,
            "group": 0,
            "attributes": []
        }, {
            "type": "rectangle",
            "occluded": false,
            "z_order": 11,
            "points": [
                1211.6,
                500.48,
                1434.49,
                710.12
            ],
            "id": 121,
            "frame": 1,
            "label_id": 1,
            "group": 0,
            "attributes": []
        }, {
            "type": "rectangle",
            "occluded": true,
            "z_order": 0,
            "points": [
                0.0,
                0.0,
                200.0,
                200.0
            ],
            "id": 122,
            "frame": 1,
            "label_id": 2,
            "group": 0,
            "attributes": []
        }, {
            "type": "rectangle",
            "occluded": false,
            "z_order": 11,
            "points": [
                1211.6,
                500.48,
                1434.49,
                710.12
            ],
            "id": 123,
            "frame": 2,
            "label_id": 1,
            "group": 0,
            "attributes": []
        }, {
            "type": "rectangle",
            "occluded": true,
            "z_order": 0,
            "points": [
                0.0,
                0.0,
                200.0,
                200.0
            ],
            "id": 124,
            "frame": 2,
            "label_id": 2,
            "group": 0,
            "attributes": []
        }, {
            "type": "rectangle",
            "occluded": false,
            "z_order": 11,
            "points": [
                1211.6,
                500.48,
                1434.49,
                710.12
            ],
            "id": 125,
            "frame": 3,
            "label_id": 1,
            "group": 0,
            "attributes": []
        }, {
            "type": "rectangle",
            "occluded": true,
            "z_order": 0,
            "points": [
                0.0,
                0.0,
                200.0,
                200.0
            ],
            "id": 126,
            "frame": 3,
            "label_id": 2,
            "group": 0,
            "attributes": []
        }, {
            "type": "rectangle",
            "occluded": false,
            "z_order": 11,
            "points": [
                1211.6,
                500.48,
                1434.49,
                710.12
            ],
            "id": 127,
            "frame": 4,
            "label_id": 1,
            "group": 0,
            "attributes": []
        }, {
            "type": "rectangle",
            "occluded": true,
            "z_order": 0,
            "points": [
                0.0,
                0.0,
                200.0,
                200.0
            ],
            "id": 128,
            "frame": 4,
            "label_id": 2,
            "group": 0,
            "attributes": []
        }, {
            "type": "rectangle",
            "occluded": false,
            "z_order": 11,
            "points": [
                1211.6,
                500.48,
                1434.49,
                710.12
            ],
            "id": 129,
            "frame": 5,
            "label_id": 1,
            "group": 0,
            "attributes": []
        }, {
            "type": "rectangle",
            "occluded": true,
            "z_order": 0,
            "points": [
                0.0,
                0.0,
                200.0,
                200.0
            ],
            "id": 130,
            "frame": 5,
            "label_id": 2,
            "group": 0,
            "attributes": []
        }, {
            "type": "rectangle",
            "occluded": false,
            "z_order": 11,
            "points": [
                1211.6,
                500.48,
                1434.49,
                710.12
            ],
            "id": 131,
            "frame": 6,
            "label_id": 1,
            "group": 0,
            "attributes": []
        }, {
            "type": "rectangle",
            "occluded": true,
            "z_order": 0,
            "points": [
                0.0,
                0.0,
                200.0,
                200.0
            ],
            "id": 132,
            "frame": 6,
            "label_id": 2,
            "group": 0,
            "attributes": []
        }, {
            "type": "rectangle",
            "occluded": false,
            "z_order": 11,
            "points": [
                1211.6,
                500.48,
                1434.49,
                710.12
            ],
            "id": 133,
            "frame": 7,
            "label_id": 1,
            "group": 0,
            "attributes": []
        }, {
            "type": "rectangle",
            "occluded": true,
            "z_order": 0,
            "points": [
                0.0,
                0.0,
                200.0,
                200.0
            ],
            "id": 134,
            "frame": 7,
            "label_id": 2,
            "group": 0,
            "attributes": []
        }, {
            "type": "rectangle",
            "occluded": false,
            "z_order": 11,
            "points": [
                1211.6,
                500.48,
                1434.49,
                710.12
            ],
            "id": 135,
            "frame": 8,
            "label_id": 1,
            "group": 0,
            "attributes": []
        }, {
            "type": "rectangle",
            "occluded": true,
            "z_order": 0,
            "points": [
                0.0,
                0.0,
                200.0,
                200.0
            ],
            "id": 136,
            "frame": 8,
            "label_id": 2,
            "group": 0,
            "attributes": []
        }],
        "tracks":[]
    }
};

const jobAnnotationsDummyData = JSON.parse(JSON.stringify(taskAnnotationsDummyData));

const frameMetaDummyData = {
       1: {
        "chunk_size": 36,
        "size": 9,
        "image_quality": 95,
        "start_frame": 0,
        "stop_frame": 8,
        "frame_filter": "",
        "frames":[{
                "width": 1920,
                "height": 1080
            }, {
                "width": 1600,
                "height": 1143
            }, {
                "width": 1600,
                "height": 859
            }, {
                "width": 3840,
                "height": 2160
            }, {
                "width": 2560,
                "height": 1920
            }, {
                "width": 1920,
                "height": 1080
            }, {
                "width": 1920,
                "height": 1080
            }, {
                "width": 700,
                "height": 453
            }, {
                "width": 1920,
                "height": 1200
        }],
    },
    2: {
        "chunk_size": 36,
        "size": 75,
        "image_quality": 50,
        "start_frame": 0,
        "stop_frame": 74,
        "frame_filter": "",
        "frames": [{
            "width": 1920,
            "height": 1080
        }],
    },
    3: {
        "chunk_size": 36,
        "size": 5002,
        "image_quality": 50,
        "start_frame": 0,
        "stop_frame": 5001,
        "frame_filter": "",
        "frames": [{
            "width": 1888,
            "height": 1408
        }],
    },
    100: {
        "chunk_size": 36,
        "size": 9,
        "image_quality": 50,
        "start_frame": 0,
        "stop_frame": 8,
        "frame_filter": "",
        "frames": [{
            "width": 1920,
            "height": 1080
          }, {
            "width": 1600,
            "height": 1143
          }, {
            "width": 1600,
            "height": 859
          }, {
            "width": 3840,
            "height": 2160
          }, {
            "width": 2560,
            "height": 1920
          }, {
            "width": 1920,
            "height": 1080
          }, {
            "width": 1920,
            "height": 1080
          }, {
            "width": 700,
            "height": 453
          }, {
            "width": 1920,
            "height": 1200
        }],
    },
    101: {
        "chunk_size": 36,
        "size": 5002,
        "image_quality": 50,
        "start_frame": 0,
        "stop_frame": 5001,
        "frame_filter": "",
        "frames": [{
            "width": 1888,
            "height": 1408
        }],
    },
    102: {
        "chunk_size": 36,
        "size": 1,
        "image_quality": 50,
        "start_frame": 0,
        "stop_frame": 0,
        "frame_filter": "",
        "frames": [{
            "width":1920,
            "height":1080
        }],
    },
}

module.exports = {
    tasksDummyData,
    aboutDummyData,
    shareDummyData,
    usersDummyData,
    taskAnnotationsDummyData,
    jobAnnotationsDummyData,
    frameMetaDummyData,
    formatsDummyData,
}

