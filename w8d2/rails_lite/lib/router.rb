class Route
  attr_reader :pattern, :http_method, :controller_class, :action_name

  def initialize(pattern, http_method, controller_class, action_name)
    @pattern, @http_method = pattern, http_method
    @controller_class, @action_name = controller_class, action_name
  end

  # checks if pattern matches path and method matches request method
  def matches?(req)
    (http_method == req.request_method.downcase.to_sym) && !!(pattern =~ req.path)
  end

  # use pattern to pull out route params (save for later?)
  # instantiate controller and call controller action
  def run(req, res)
    match_data = @pattern.match(req.path)

    route_params = Hash[match_data.names.zip(match_data.captures)]

    @controller_class
      .new(req, res, route_params)
      .invoke_action(action_name)
  end
end

class Router
  attr_reader :routes

  def initialize
  end

  # simply adds a new route to the list of routes
  def add_route(pattern, method, controller_class, action_name)
  end

  # evaluate the proc in the context of the instance
  # for syntactic sugar :)
  def draw(&proc)
  end

  # make each of these methods that
  # when called add route
  [:get, :post, :put, :delete].each do |http_method|
  end

  # should return the route that matches this request
  def match(req)
  end

  # either throw 404 or call run on a matched route
  def run(req, res)
  end
end