define(['data-storage'], function (database) {
    (function () {
        initUser();
        initMenu();
    })();

    function initUser() {
        database.User.deleteAll();
        database.User.addRange([{
                Id: 1,
                Username: 'admin',
                FullName: 'administrator',
                Email: 'admin@sydq.cn'
            }, {
                Id: 2,
                Username: 'guoxin-qiu',
                FullName: 'Denis Qiu',
                Email: 'guoxin.qiu@outlook.com'
            }, {
                Id: 3,
                Username: 'ood970',
                FullName: 'Muriel Thodore',
                Email: 'ood970@126.com'
            },
            {
                Id: 4,
                Username: 'ogden',
                FullName: 'Ogden Raymond',
                Email: 'ogden@hotmail.com'
            },
            {
                Id: 5,
                Username: 'branda',
                FullName: 'Stan Warren',
                Email: 'branda@sina.com'
            },
            {
                Id: 6,
                Username: 'michael9001',
                FullName: 'Michael Wheeler',
                Email: 'michael888@ibm.com'
            },
            {
                Id: 7,
                Username: 'bob-god',
                FullName: 'Ingemar Bob',     
                Email: 'ck133@trick.cn'
            },
            {
                Id: 8,
                Username: 'ju00011',
                FullName: 'Ursula Jessie',
                Email: 'ju00011@facebook.com'
            },
            {
                Id: 9,
                Username: 'loveElla',
                FullName: 'Vito Ella',
                Email: 'loveElla@love.cn'
            },
            {
                Id: 10,
                Username: 'one-two-three',
                FullName: 'Zebulon Albert',
                Email: 'onetwothree@123.cn'
            }
        ]);
    }

    function initMenu() {
        database.Menu.deleteAll();
        database.Menu.addRange([{
            Id: 1,
            Text: '主页',
            Url: './index.html',
            IsActive: true
        }, {
            Id: 2,
            Text: '用户管理',
            Url: './user.html',
            IsActive: true
        }, {
            Id: 99,
            Text: 'API',
            Url: './api.html',
            IsActive: true
        }]);
    }
});