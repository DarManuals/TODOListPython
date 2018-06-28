from flask import Flask, render_template, jsonify, request, abort

from flaskext.mysql import MySQL

mysql = MySQL()
app = Flask(__name__)
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'password'
app.config['MYSQL_DATABASE_DB'] = 'flaskpy'
app.config['MYSQL_DATABASE_HOST'] = 'pysql'
mysql.init_app(app)
con = mysql.connect()


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/tasks')
def tasks():
    cur = con.cursor()
    cur.execute("select id, name, priority from tasks order by priority desc")
    con.commit()
    tasks = []
    for id, name, pr in cur.fetchall():
        task =dict()
        task['id'] = id
        task['name'] = name
        task['priority'] = pr
        tasks.append(task)
    return jsonify(tasks)


@app.route('/tasks/delete/<task_id>', methods=['POST'])
def delete(task_id):
    cur = con.cursor()
    cur.execute('delete from tasks where id=' + task_id)
    con.commit()
    return jsonify({'result': True})


@app.route('/tasks/add', methods=['POST'])
def add():
    cur = con.cursor()
    name = request.form.get('name')
    priority = request.form.get('priority')
    if not name or not priority:
        abort(500)
    cur.execute('insert into tasks values(null, "%s", "%s")' % (name, priority))
    con.commit()
    return jsonify({'result': True})

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
