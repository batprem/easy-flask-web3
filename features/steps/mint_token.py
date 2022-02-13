from behave import given, when, then
from scripts.utils import x


@given("we have behave installed")
def step_given(context):
    """
    Given.

    :arguments:
        context: share context
    """
    print(x)


@when("we implement a test")
def step_when(context):
    assert True is not False


@then("behave will test it for us!")
def step_then(context):
    assert context.failed is False
