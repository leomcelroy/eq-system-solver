function valder(val, der) {
    return {
        type: "valder",
        val: val,
        der: der
    };
}
const sin = (x)=>{
    if (typeof x === "number" && !isNaN(x)) {
        return Math.sin(x);
    } else if (x.type === "valder") {
        return valder(sin(x.val), x.der.map((temp)=>mul(temp, cos(x.val))
        ));
    }
};
const cos = (x)=>{
    if (typeof x === "number" && !isNaN(x)) {
        return Math.cos(x);
    } else if (x.type === "valder") {
        return valder(cos(x.val), x.der.map((temp)=>mul(neg(temp), sin(x.val))
        ));
    }
};
const tan = (x)=>{
    if (typeof x === "number" && !isNaN(x)) {
        return Math.tan(x);
    } else if (x.type === "valder") {
        return valder(tan(x.val), x.der.map((temp)=>div(temp, mul(cos(x.val), cos(x.val)))
        ));
    }
};
const asin = (x)=>{
    if (typeof x === "number" && !isNaN(x)) {
        return Math.asin(x);
    } else if (x.type === "valder") {
        return valder(asin(x.val), x.der.map((temp)=>div(temp, sqrt(minus(1, mul(x.val, x.val))))
        ));
    }
};
const acos = (x)=>{
    if (typeof x === "number" && !isNaN(x)) {
        return Math.acos(x);
    } else if (x.type === "valder") {
        return valder(acos(x.val), x.der.map((temp)=>div(neg(temp), sqrt(minus(1, mul(x.val, x.val))))
        ));
    }
};
const atan = (x)=>{
    if (typeof x === "number" && !isNaN(x)) {
        return Math.atan(x);
    } else if (x.type === "valder") {
        return valder(atan(x.val), x.der.map((temp)=>div(temp, plus(1, mul(x.val, x.val)))
        ));
    }
};
const mul = (x0, x1)=>{
    if (typeof x0 === "number" && typeof x1 === "number" && !isNaN(x0) && !isNaN(x1)) {
        return x0 * x1;
    } else if (x0.type === "valder" || x1.type === "valder") {
        if (typeof x0 === "number" && typeof x1 !== "number") {
            x0 = valder(x0, x1.der.map((temp)=>0
            ));
        }
        if (typeof x1 === "number" && typeof x0 !== "number") {
            x1 = valder(x1, x0.der.map((temp)=>0
            ));
        }
        return valder(mul(x0.val, x1.val), x1.der.map((temp, index)=>plus(mul(temp, x0.val), mul(x1.val, x0.der[index]))
        ));
    }
};
const div = (x0, x1)=>{
    if (typeof x0 === "number" && typeof x1 === "number" && !isNaN(x0) && !isNaN(x1)) {
        return x0 / x1;
    } else if (x0.type === "valder" || x1.type === "valder") {
        if (typeof x0 === "number" && typeof x1 !== "number") {
            x0 = valder(x0, x1.der.map((temp)=>0
            ));
        }
        if (typeof x1 === "number" && typeof x0 !== "number") {
            x1 = valder(x1, x0.der.map((temp)=>0
            ));
        }
        return valder(div(x0.val, x1.val), x0.der.map((temp, index)=>div(minus(mul(x1.val, temp), mul(x0.val, x1.der[index])), mul(x1.val, x1.val))
        ));
    }
};
const neg = (x)=>{
    if (typeof x === "number" && !isNaN(x)) {
        return -x;
    } else if (x.type === "valder") {
        return valder(neg(x.val), x.der.map((temp)=>neg(temp)
        ));
    }
};
const plus = (x0, x1)=>{
    if (typeof x0 === "number" && typeof x1 === "number" && !isNaN(x0) && !isNaN(x1)) {
        return x0 + x1;
    } else if (x0.type === "valder" || x1.type === "valder") {
        if (typeof x0 === "number" && typeof x1 !== "number") {
            x0 = valder(x0, x1.der.map((temp)=>0
            ));
        }
        if (typeof x1 === "number" && typeof x0 !== "number") {
            x1 = valder(x1, x0.der.map((temp)=>0
            ));
        }
        return valder(plus(x0.val, x1.val), x0.der.map((temp, index)=>plus(temp, x1.der[index])
        ));
    }
};
const minus = (x0, x1)=>{
    if (typeof x0 === "number" && typeof x1 === "number" && !isNaN(x0) && !isNaN(x1)) {
        return x0 - x1;
    } else if (x0.type === "valder" || x1.type === "valder") {
        if (typeof x0 === "number" && typeof x1 !== "number") {
            x0 = valder(x0, x1.der.map((temp)=>0
            ));
        }
        if (typeof x1 === "number" && typeof x0 !== "number") {
            x1 = valder(x1, x0.der.map((temp)=>0
            ));
        }
        return valder(minus(x0.val, x1.val), x0.der.map((temp, index)=>minus(temp, x1.der[index])
        ));
    }
};
const exp = (x)=>{
    if (typeof x === "number" && !isNaN(x)) {
        return Math.exp(x);
    } else if (x.type === "valder") {
        return valder(exp(x.val), x.der.map((temp)=>mul(temp, exp(x.val))
        ));
    }
};
const sqrt = (x)=>{
    if (typeof x === "number" && !isNaN(x)) {
        return Math.sqrt(x);
    } else if (x.type === "valder") {
        return valder(sqrt(x.val), x.der.map((temp)=>mul(temp, div(0.5, sqrt(x.val)))
        ));
    }
};
const log = (x)=>{
    if (typeof x === "number" && !isNaN(x)) {
        return Math.log(x);
    } else if (x.type === "valder") {
        return valder(log(x.val), x.der.map((temp)=>div(temp, x.val)
        ));
    }
};
const power = (x0, x1)=>{
    if (typeof x0 === "number" && typeof x1 === "number" && !isNaN(x0) && !isNaN(x1)) {
        return x0 ** x1;
    } else if (x0.type === "valder" || x1.type === "valder") {
        if (typeof x0 === "number" && typeof x1 !== "number") {
            x0 = valder(x0, x1.der.map((temp)=>0
            ));
        }
        if (typeof x1 === "number" && typeof x0 !== "number") {
            x1 = valder(x1, x0.der.map((temp)=>0
            ));
        }
        let ans;
        if (x1.val > 0) {
            ans = x0;
        } else if (x1.val < 0) {
            ans = div(1, x0);
        } else {
            return valder(0, x0.der.map((temp)=>0
            ));
        }
        for(let step = 1; step < Math.abs(x1.val); step++){
            ans = mul(ans, x0);
        }
        return ans;
    }
};
const OPERATORS = [
    [
        "+",
        "-"
    ],
    [
        "*",
        "/"
    ],
    [
        "^"
    ]
];
const PRECEDENCE = Object.fromEntries(OPERATORS.map((level, i)=>level.map((op)=>[
            op,
            i + 1
        ]
    )
).flat());
class InputStream {
    constructor(string){
        this.pos = 0;
        this.line = 1;
        this.col = 0;
        this.input = string;
    }
    next() {
        let ch = this.input.charAt(this.pos++);
        if (ch === "\n") this.line++, this.col = 0;
        else this.col++;
        return ch;
    }
    peek(offset = 0) {
        return this.input.charAt(this.pos + offset);
    }
    eof() {
        return this.peek() === "";
    }
    croak(msg) {
        throw new Error(msg + " (" + this.line + ":" + this.col + ")");
    }
}
const is_digit = (ch)=>/[0-9]/i.test(ch)
;
const is_symbol_start = (ch)=>/[a-z]/i.test(ch)
;
const is_symbol = (ch)=>is_symbol_start(ch) || "0123456789_".indexOf(ch) >= 0
;
const is_op_char = (ch)=>/[\+\-\*\/\^]/.test(ch)
;
const is_whitespace = (ch)=>" \t\r\n".indexOf(ch) >= 0
;
function TokenStream(string1) {
    let input = new InputStream(string1);
    let current = null;
    let list_depth = 0;
    return {
        next: next,
        peek: peek,
        eof: eof,
        croak: input.croak
    };
    function read_while(predicate) {
        let ch = input.peek();
        let str = "";
        while(!input.eof() && predicate(input.peek()))str += input.next();
        return str;
    }
    function read_symbol() {
        const value = read_while(is_symbol).toLowerCase();
        if (input.peek() === "(") return {
            type: "call",
            value
        };
        else return {
            type: "symbol",
            value
        };
    }
    function read_number() {
        let dots_seen = 0;
        let number = read_while(function(ch) {
            if (ch === ".") {
                dots_seen++;
                if (dots_seen > 1) input.croak("Multiple decimals in number.");
                return true;
            } else return is_digit(ch);
        });
        return {
            type: "number",
            value: parseFloat(number)
        };
    }
    function read_token() {
        read_while(is_whitespace);
        if (input.eof()) return null;
        let ch = input.peek();
        if (is_op_char(ch)) {
            const value = read_while(is_op_char);
            return {
                type: "op",
                value
            };
        }
        if (is_symbol_start(ch)) return read_symbol();
        if (is_digit(ch) || ch === ".") return read_number();
        if (ch === "(") return {
            type: "left-paren",
            value: input.next()
        };
        if (ch === ")") return {
            type: "right-paren",
            value: input.next()
        };
        input.croak("Can't handle character: " + ch);
    }
    function peek() {
        return current || (current = read_token());
    }
    function next() {
        var tok = current;
        current = null;
        return tok || read_token();
    }
    function eof() {
        return peek() === null;
    }
}
function parse(string1) {
    const input = TokenStream(string1);
    return parse_expression();
    function is_paren(ch) {
        var tok = input.peek();
        return tok.type && tok && tok.type.includes("paren") && (!ch || tok.value === ch) && tok;
    }
    function skip_paren(ch) {
        if (is_paren(ch)) input.next();
        else input.croak("Expecting punctuation: \"" + ch + "\"");
    }
    function is_op(op) {
        var tok = input.peek();
        return tok && tok.type === "op" && (!op || tok.value === op) && tok;
    }
    function unexpected() {
        input.croak("Unexpected token: " + JSON.stringify(input.peek()));
    }
    function maybe_binary(left, my_prec) {
        var tok = is_op();
        if (!tok) return left;
        var his_prec = PRECEDENCE[tok.value];
        if (his_prec > my_prec) {
            input.next();
            return maybe_binary({
                type: "binary",
                operator: tok.value,
                left: left,
                right: parse_expression(his_prec)
            }, my_prec);
        } else {
            return left;
        }
    }
    function parse_call() {
        const call = input.next();
        skip_paren("(");
        const args = [];
        while(!is_paren(")"))args.push(parse_expression());
        skip_paren(")");
        call.args = args;
        return call;
    }
    function parse_atom() {
        if (is_paren("(")) {
            let exp1;
            skip_paren("(");
            exp1 = parse_expression();
            skip_paren(")");
            return exp1;
        }
        if (input.peek().type === "call") return parse_call();
        var tok = input.next();
        const literals = [
            "number",
            "symbol"
        ];
        if (literals.includes(tok.type)) return tok;
        unexpected();
    }
    function parse_expression(prec = 0) {
        return maybe_binary(parse_atom(), prec);
    }
}
const treeTraversal = (node, vars)=>{
    if (node.type === "number") return parseFloat(node.value);
    else if (node.type === "binary") {
        let left = treeTraversal(node.left, vars);
        let right = treeTraversal(node.right, vars);
        switch(node.operator){
            case "+":
                return plus(left, right);
            case "*":
                return mul(left, right);
            case "/":
                return div(left, right);
            case "-":
                return minus(left, right);
            case "^":
                return power(left, right);
            case "**":
                return power(left, right);
        }
    } else if (node.type === "symbol") {
        let variable = node.value;
        let valder1 = vars[variable];
        return valder1;
    } else if (node.type === "call") {
        let args = node.args.map((x)=>treeTraversal(x, vars)
        );
        switch(node.value){
            case "sin":
                return sin(...args);
            case "cos":
                return cos(...args);
            case "tan":
                return tan(...args);
            case "asin":
                return asin(...args);
            case "acos":
                return acos(...args);
            case "atan":
                return atan(...args);
            case "exp":
                return exp(...args);
            case "sqrt":
                return sqrt(...args);
            case "log":
                return log(...args);
            case "neg":
                return neg(...args);
        }
    }
};
const calculate = (exp1, vars)=>{
    const ast = parse(exp1);
    return treeTraversal(ast, vars);
};
function evaluate(eq, variables) {
    let valder_vars = {
    };
    let length = Object.keys(variables).length;
    Object.keys(variables).forEach((key, index)=>{
        let partial_der = Array.apply(null, Array(length)).map(Number.prototype.valueOf, 0);
        partial_der[index] = 1;
        let temp = valder(variables[key], partial_der);
        valder_vars[key] = temp;
    });
    return calculate(eq, valder_vars);
}
var _throwError = function(msg) {
    throw new Error('linear-algebra: ' + msg);
};
var _throwSizeMismatchError = function(op, arg1, arg2) {
    _throwError('[' + op + '] op1 is ' + arg1.rows + ' x ' + arg1.cols + ' and op2 is ' + arg2.rows + ' x ' + arg2.cols);
};
function linearAlgebra(options) {
    options = options || {
    };
    var LinAlg = {
    };
    var Matrix = LinAlg.Matrix = function(values) {
        if (Array.isArray(values[0])) {
            this.data = values;
            this.rows = values.length;
            this.cols = values[0].length;
        } else {
            this.data = [
                values
            ];
            this.rows = 1;
            this.cols = values.length;
        }
    };
    Matrix.prototype.clone = function() {
        return new Matrix(this.toArray());
    };
    Matrix.prototype.toArray = function() {
        var thisData = this.data, rows = this.rows, cols = this.cols;
        var a = new Array(rows);
        for(var i = 0; i < rows; ++i){
            a[i] = thisData[i].slice(0, cols);
        }
        return a;
    };
    Matrix.identity = function(dim) {
        return Matrix.scalar(dim, 1);
    };
    Matrix.scalar = function(dim, entry) {
        var a = new Array(dim), i, j;
        for(i = 0; i < dim; ++i){
            a[i] = new Array(dim);
            for(j = 0; j < dim; ++j){
                a[i][j] = 0;
            }
            a[i][i] = entry;
        }
        return new Matrix(a);
    };
    Matrix.zero = function(rows, cols) {
        var a = new Array(rows);
        for(var i = 0; i < rows; ++i){
            a[i] = new Array(cols);
            for(var j = 0; j < cols; ++j){
                a[i][j] = 0;
            }
        }
        return new Matrix(a);
    };
    Matrix.reshapeFrom = function(values, rows, cols) {
        if (values.length !== rows * cols) {
            _throwError('cannot reshape array of length ' + values.length + ' into ' + rows + 'x' + cols + ' matrix');
        }
        var a = [];
        for(var i = 0; i < values.length; i += cols){
            a.push(values.slice(i, cols + i));
        }
        return new Matrix(a);
    };
    var Vector = LinAlg.Vector = {
        zero: function(size) {
            var a = new Array(size);
            for(var i = 0; i < size; ++i){
                a[i] = 0;
            }
            return new Matrix(a);
        }
    };
    if (options.add) {
        console.warn('linear-algebra: adder (options.add) will not be used in non-precision version');
    }
    Matrix.prototype.trans = function() {
        var thisData = this.data, rows = this.rows, cols = this.cols;
        var row, col;
        var result = new Array(cols);
        for(col = 0; col < cols; ++col){
            result[col] = new Array(rows);
            for(row = 0; row < rows; ++row){
                result[col][row] = thisData[row][col];
            }
        }
        return new Matrix(result);
    };
    Matrix.prototype.trans_ = function() {
        var thisData = this.data, rows = this.rows, cols = this.cols;
        var row, col, t;
        var isSquare = cols === rows;
        var shortestSide = cols > rows ? rows : cols;
        for(row = 0; row < shortestSide; ++row){
            for(col = row + 1; col < shortestSide; ++col){
                t = thisData[col][row];
                thisData[col][row] = thisData[row][col];
                thisData[row][col] = t;
            }
        }
        if (!isSquare) {
            if (cols > rows) {
                for(col = rows; cols > col; ++col){
                    if (!Array.isArray(thisData[col])) {
                        thisData[col] = new Array(rows);
                    }
                    for(row = 0; row < rows; ++row){
                        thisData[col][row] = thisData[row][col];
                    }
                }
            } else {
                for(row = cols; rows > row; ++row){
                    for(col = 0; cols > col; ++col){
                        thisData[col][row] = thisData[row][col];
                    }
                }
            }
            t = rows;
            this.rows = cols;
            this.cols = t;
        }
        return this;
    };
    Matrix.prototype.div = function(op2) {
        var thisData = this.data, rows = this.rows, cols = this.cols, op2Data = op2.data, rows2 = op2.rows, cols2 = op2.cols;
        if (rows !== rows2 || cols !== cols2) {
            _throwSizeMismatchError('div', this, op2);
        }
        var row, col, result = new Array(rows);
        for(row = 0; row < rows; ++row){
            result[row] = new Array(cols);
            for(col = 0; col < cols; ++col){
                result[row][col] = thisData[row][col] / op2Data[row][col];
            }
        }
        return new Matrix(result);
    };
    Matrix.prototype.div_ = function(op2) {
        var thisData = this.data, rows = this.rows, cols = this.cols, op2Data = op2.data, rows2 = op2.rows, cols2 = op2.cols;
        if (rows !== rows2 || cols !== cols2) {
            _throwSizeMismatchError('div_', this, op2);
        }
        var row, col;
        for(row = 0; row < rows; ++row){
            for(col = 0; col < cols; ++col){
                thisData[row][col] = thisData[row][col] / op2Data[row][col];
            }
        }
        return this;
    };
    Matrix.prototype.mul = function(op2) {
        var thisData = this.data, rows = this.rows, cols = this.cols, op2Data = op2.data, rows2 = op2.rows, cols2 = op2.cols;
        if (rows !== rows2 || cols !== cols2) {
            _throwSizeMismatchError('mul', this, op2);
        }
        var row, col, result = new Array(rows);
        for(row = 0; row < rows; ++row){
            result[row] = new Array(cols);
            for(col = 0; col < cols; ++col){
                result[row][col] = thisData[row][col] * op2Data[row][col];
            }
        }
        return new Matrix(result);
    };
    Matrix.prototype.mul_ = function(op2) {
        var thisData = this.data, rows = this.rows, cols = this.cols, op2Data = op2.data, rows2 = op2.rows, cols2 = op2.cols;
        if (rows !== rows2 || cols !== cols2) {
            _throwSizeMismatchError('mul_', this, op2);
        }
        var row, col;
        for(row = 0; row < rows; ++row){
            for(col = 0; col < cols; ++col){
                thisData[row][col] = thisData[row][col] * op2Data[row][col];
            }
        }
        return this;
    };
    Matrix.prototype.plus = function(op2) {
        var thisData = this.data, rows = this.rows, cols = this.cols, op2Data = op2.data, rows2 = op2.rows, cols2 = op2.cols;
        if (rows !== rows2 || cols !== cols2) {
            _throwSizeMismatchError('plus', this, op2);
        }
        var row, col, result = new Array(rows);
        for(row = 0; row < rows; ++row){
            result[row] = new Array(cols);
            for(col = 0; col < cols; ++col){
                result[row][col] = thisData[row][col] + op2Data[row][col];
            }
        }
        return new Matrix(result);
    };
    Matrix.prototype.plus_ = function(op2) {
        var thisData = this.data, rows = this.rows, cols = this.cols, op2Data = op2.data, rows2 = op2.rows, cols2 = op2.cols;
        if (rows !== rows2 || cols !== cols2) {
            _throwSizeMismatchError('plus_', this, op2);
        }
        var row, col;
        for(row = 0; row < rows; ++row){
            for(col = 0; col < cols; ++col){
                thisData[row][col] = thisData[row][col] + op2Data[row][col];
            }
        }
        return this;
    };
    Matrix.prototype.minus = function(op2) {
        var thisData = this.data, rows = this.rows, cols = this.cols, op2Data = op2.data, rows2 = op2.rows, cols2 = op2.cols;
        if (rows !== rows2 || cols !== cols2) {
            _throwSizeMismatchError('minus', this, op2);
        }
        var row, col, result = new Array(rows);
        for(row = 0; row < rows; ++row){
            result[row] = new Array(cols);
            for(col = 0; col < cols; ++col){
                result[row][col] = thisData[row][col] - op2Data[row][col];
            }
        }
        return new Matrix(result);
    };
    Matrix.prototype.minus_ = function(op2) {
        var thisData = this.data, rows = this.rows, cols = this.cols, op2Data = op2.data, rows2 = op2.rows, cols2 = op2.cols;
        if (rows !== rows2 || cols !== cols2) {
            _throwSizeMismatchError('minus_', this, op2);
        }
        var row, col;
        for(row = 0; row < rows; ++row){
            for(col = 0; col < cols; ++col){
                thisData[row][col] = thisData[row][col] - op2Data[row][col];
            }
        }
        return this;
    };
    Matrix.prototype.dot = function(op2) {
        var thisData = this.data, rows = this.rows, cols = this.cols, op2Data = op2.data, rows2 = op2.rows, cols2 = op2.cols;
        if (cols !== rows2) {
            _throwSizeMismatchError('dot', this, op2);
        }
        var row, row2, col2;
        var result = new Array(rows);
        for(row = 0; row < rows; ++row){
            result[row] = new Array(cols2);
            for(col2 = 0; col2 < cols2; ++col2){
                result[row][col2] = 0;
                for(row2 = 0; row2 < rows2; ++row2){
                    result[row][col2] += thisData[row][row2] * op2Data[row2][col2];
                }
            }
        }
        return new Matrix(result);
    };
    Matrix.prototype.dot_ = function(op2) {
        var thisData = this.data, rows = this.rows, cols = this.cols, op2Data = op2.data, rows2 = op2.rows, cols2 = op2.cols;
        if (cols !== rows2) {
            _throwSizeMismatchError('dot_', this, op2);
        }
        var row, row2, col2, tmp;
        for(row = 0; row < rows; ++row){
            tmp = thisData[row].slice(0, cols);
            for(col2 = 0; col2 < cols2; ++col2){
                thisData[row][col2] = 0;
                for(row2 = 0; row2 < rows2; ++row2){
                    thisData[row][col2] += tmp[row2] * op2Data[row2][col2];
                }
            }
        }
        this.cols = cols2;
        return this;
    };
    Matrix.prototype.getSum = function() {
        var thisData = this.data, rows = this.rows, cols = this.cols;
        var sum = 0;
        for(var i = 0; i < rows; ++i){
            for(var j = 0; j < cols; ++j){
                sum += thisData[i][j];
            }
        }
        return sum;
    };
    Matrix.prototype.map = function(transformFn) {
        var thisData = this.data, rows = this.rows, cols = this.cols;
        var row, col, result = new Array(rows);
        for(row = 0; row < rows; ++row){
            result[row] = new Array(cols);
            for(col = 0; col < cols; ++col){
                result[row][col] = transformFn(thisData[row][col]);
            }
        }
        return new Matrix(result);
    };
    Matrix.prototype.map_ = function(transformFn) {
        var thisData = this.data, rows = this.rows, cols = this.cols;
        var row, col;
        for(row = 0; row < rows; ++row){
            for(col = 0; col < cols; ++col){
                thisData[row][col] = transformFn(thisData[row][col]);
            }
        }
        return this;
    };
    Matrix.prototype.log = function(undefined) {
        var thisData = this.data, rows = this.rows, cols = this.cols;
        var row, col, result = new Array(rows);
        for(row = 0; row < rows; ++row){
            result[row] = new Array(cols);
            for(col = 0; col < cols; ++col){
                result[row][col] = Math.log(thisData[row][col]);
            }
        }
        return new Matrix(result);
    };
    Matrix.prototype.log_ = function(undefined) {
        var thisData = this.data, rows = this.rows, cols = this.cols;
        var row, col;
        for(row = 0; row < rows; ++row){
            for(col = 0; col < cols; ++col){
                thisData[row][col] = Math.log(thisData[row][col]);
            }
        }
        return this;
    };
    Matrix.prototype.sigmoid = function(undefined) {
        var thisData = this.data, rows = this.rows, cols = this.cols;
        var row, col, result = new Array(rows);
        for(row = 0; row < rows; ++row){
            result[row] = new Array(cols);
            for(col = 0; col < cols; ++col){
                result[row][col] = 1 / (1 + Math.exp(-thisData[row][col]));
            }
        }
        return new Matrix(result);
    };
    Matrix.prototype.sigmoid_ = function(undefined) {
        var thisData = this.data, rows = this.rows, cols = this.cols;
        var row, col;
        for(row = 0; row < rows; ++row){
            for(col = 0; col < cols; ++col){
                thisData[row][col] = 1 / (1 + Math.exp(-thisData[row][col]));
            }
        }
        return this;
    };
    Matrix.prototype.mulEach = function(value) {
        var thisData = this.data, rows = this.rows, cols = this.cols;
        var row, col, result = new Array(rows);
        for(row = 0; row < rows; ++row){
            result[row] = new Array(cols);
            for(col = 0; col < cols; ++col){
                result[row][col] = thisData[row][col] * value;
            }
        }
        return new Matrix(result);
    };
    Matrix.prototype.mulEach_ = function(value) {
        var thisData = this.data, rows = this.rows, cols = this.cols;
        var row, col;
        for(row = 0; row < rows; ++row){
            for(col = 0; col < cols; ++col){
                thisData[row][col] = thisData[row][col] * value;
            }
        }
        return this;
    };
    Matrix.prototype.plusEach = function(value) {
        var thisData = this.data, rows = this.rows, cols = this.cols;
        var row, col, result = new Array(rows);
        for(row = 0; row < rows; ++row){
            result[row] = new Array(cols);
            for(col = 0; col < cols; ++col){
                result[row][col] = thisData[row][col] + value;
            }
        }
        return new Matrix(result);
    };
    Matrix.prototype.plusEach_ = function(value) {
        var thisData = this.data, rows = this.rows, cols = this.cols;
        var row, col;
        for(row = 0; row < rows; ++row){
            for(col = 0; col < cols; ++col){
                thisData[row][col] = thisData[row][col] + value;
            }
        }
        return this;
    };
    Matrix.prototype.eleMap = function(transformFn) {
        var thisData = this.data, rows = this.rows, cols = this.cols;
        var row, col, result = new Array(rows);
        for(row = 0; row < rows; ++row){
            result[row] = new Array(cols);
            for(col = 0; col < cols; ++col){
                result[row][col] = transformFn(thisData[row][col], row, col);
            }
        }
        return new Matrix(result);
    };
    Matrix.prototype.eleMap_ = function(transformFn) {
        var thisData = this.data, rows = this.rows, cols = this.cols;
        var row, col;
        for(row = 0; row < rows; ++row){
            for(col = 0; col < cols; ++col){
                thisData[row][col] = transformFn(thisData[row][col], row, col);
            }
        }
        return this;
    };
    return LinAlg;
}
function LU(A, fast) {
    fast = fast || false;
    var abs = Math.abs;
    var i, j, k, absAjk, Akk, Ak, Pk, Ai;
    var max;
    var n = A.length, n1 = n - 1;
    var P = new Array(n);
    if (!fast) A = [
        ...A
    ];
    for(k = 0; k < n; ++k){
        Pk = k;
        Ak = A[k];
        max = abs(Ak[k]);
        for(j = k + 1; j < n; ++j){
            absAjk = abs(A[j][k]);
            if (max < absAjk) {
                max = absAjk;
                Pk = j;
            }
        }
        P[k] = Pk;
        if (Pk != k) {
            A[k] = A[Pk];
            A[Pk] = Ak;
            Ak = A[k];
        }
        Akk = Ak[k];
        for(i = k + 1; i < n; ++i){
            A[i][k] /= Akk;
        }
        for(i = k + 1; i < n; ++i){
            Ai = A[i];
            for(j = k + 1; j < n1; ++j){
                Ai[j] -= Ai[k] * Ak[j];
                ++j;
                Ai[j] -= Ai[k] * Ak[j];
            }
            if (j === n1) Ai[j] -= Ai[k] * Ak[j];
        }
    }
    return {
        LU: A,
        P: P
    };
}
function LUsolve(LUP, b) {
    var i, j;
    var LU1 = LUP.LU;
    var n = LU1.length;
    var x = [
        ...b
    ];
    var P = LUP.P;
    var Pi, LUi, LUii, tmp;
    for(i = n - 1; i !== -1; --i)x[i] = b[i];
    for(i = 0; i < n; ++i){
        Pi = P[i];
        if (P[i] !== i) {
            tmp = x[i];
            x[i] = x[Pi];
            x[Pi] = tmp;
        }
        LUi = LU1[i];
        for(j = 0; j < i; ++j){
            x[i] -= x[j] * LUi[j];
        }
    }
    for(i = n - 1; i >= 0; --i){
        LUi = LU1[i];
        for(j = i + 1; j < n; ++j){
            x[i] -= x[j] * LUi[j];
        }
        x[i] /= LUi[i];
    }
    return x;
}
function lusolve(A, b, fast) {
    return LUsolve(LU(A, fast), b);
}
const lusolve1 = lusolve;
const Matrix = linearAlgebra().Matrix;
const parseComb = (eqs)=>{
    eqs = eqs.map((eq)=>`(${eq})*(${eq})`
    );
    return eqs.join("+");
};
const totalError = (val_ders)=>val_ders[0].flat().reduce((acc, cur)=>acc + cur ** 2
    , 0) / 2
;
const get_val_ders = (eqs, variables)=>eqs.reduce((acc, cur)=>{
        let { val , der  } = evaluate(cur, variables);
        return [
            [
                ...acc[0],
                [
                    val
                ]
            ],
            [
                ...acc[1],
                der
            ]
        ];
    }, [
        [],
        []
    ])
;
function levenbergMarquardt(eqs, variables, { ogLambda =10 , lambdaUp =10 , lambdaDown =10 , epsilon =0.00001 , fast =false  } = {
}) {
    let lambda = ogLambda;
    let updateJacobian = true;
    let converged = false;
    let transJacobian, hessianApprox, residual, jacobian, weighted, gradiant, new_val_ders, costGradiant, a, b, deltas, error, newVariables, new_error, ds;
    let val_ders = get_val_ders(eqs, variables);
    while(!converged){
        if (updateJacobian) {
            [residual, jacobian] = val_ders.map((x)=>new Matrix(x)
            );
            transJacobian = jacobian.trans();
            hessianApprox = transJacobian.dot(jacobian);
            updateJacobian = false;
        }
        weighted = Matrix.scalar(hessianApprox.rows, lambda);
        gradiant = hessianApprox.plus(weighted);
        costGradiant = transJacobian.dot(residual);
        a = gradiant.toArray();
        b = costGradiant.toArray();
        deltas = lusolve1(a, b, fast);
        error = totalError(val_ders);
        newVariables = {
        };
        Object.keys(variables).forEach((key, index)=>{
            newVariables[key] = variables[key] - deltas[index];
        });
        new_val_ders = get_val_ders(eqs, newVariables);
        new_error = totalError(new_val_ders);
        ds = new_val_ders[1].flat();
        converged = new_error < epsilon || ds.every((der)=>Math.abs(der) < epsilon
        ) || Math.abs(error - new_error) < epsilon;
        if (new_error < error) {
            lambda = lambda / lambdaDown;
            variables = newVariables;
            val_ders = new_val_ders;
            updateJacobian = true;
        } else {
            lambda = lambda * lambdaUp;
        }
    }
    return newVariables;
}
function splitAt(index, array) {
    let front = array.slice(0, index);
    let back = array.slice(index);
    return [
        front,
        back
    ];
}
function solveSystem1(eqns, vars, { forwardSubs ={
} , epsilon =0.00001  } = {
}) {
    Object.entries(forwardSubs).forEach(([variable, value])=>{
        eqns = eqns.map((eq)=>eq.replaceAll(variable, value)
        );
    });
    if (eqns.length < 1) return [
        [],
        vars
    ];
    let varsPrime;
    try {
        varsPrime = levenbergMarquardt(eqns, vars, {
            epsilon
        });
        Object.entries(forwardSubs).forEach(([variable, value])=>{
            if (typeof value === "string") varsPrime[variable] = varsPrime[value];
            else varsPrime[variable] = value;
        });
    } catch (err) {
        console.log("Erred during levenbergMarquardt, maybe undefined in jacobian:", err);
        varsPrime = vars;
    }
    let scores = eqns.map((eq)=>evaluate(eq, varsPrime).val ** 2
    );
    let satisfied = scores.map((score)=>score < Math.sqrt(epsilon)
    );
    let result = [];
    if (satisfied.every((constraint)=>constraint === true
    )) {
        result = [
            satisfied,
            varsPrime
        ];
    } else {
        let indices = [];
        satisfied.forEach((constraint, index)=>{
            if (constraint === false) {
                indices.push(index);
            }
        });
        let [front, back] = splitAt(indices[0], eqns);
        let newEqs = front.concat(back.slice(1));
        let [satisfiedPrime, out] = solveSystem1(newEqs, varsPrime, {
            forwardSubs,
            epsilon
        });
        let [a, b] = splitAt(indices[0], satisfiedPrime);
        result = [
            a.concat([
                false
            ]).concat(b),
            out
        ];
    }
    return result;
}
export { solveSystem1 as solveSystem };
