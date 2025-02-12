# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from .. import _utilities

__all__ = ['HostedConfigurationVersionArgs', 'HostedConfigurationVersion']

@pulumi.input_type
class HostedConfigurationVersionArgs:
    def __init__(__self__, *,
                 application_id: pulumi.Input[str],
                 configuration_profile_id: pulumi.Input[str],
                 content: pulumi.Input[str],
                 content_type: pulumi.Input[str],
                 description: Optional[pulumi.Input[str]] = None):
        """
        The set of arguments for constructing a HostedConfigurationVersion resource.
        :param pulumi.Input[str] application_id: The application ID.
        :param pulumi.Input[str] configuration_profile_id: The configuration profile ID.
        :param pulumi.Input[str] content: The content of the configuration or the configuration data.
        :param pulumi.Input[str] content_type: A standard MIME type describing the format of the configuration content. For more information, see [Content-Type](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17).
        :param pulumi.Input[str] description: A description of the configuration.
        """
        pulumi.set(__self__, "application_id", application_id)
        pulumi.set(__self__, "configuration_profile_id", configuration_profile_id)
        pulumi.set(__self__, "content", content)
        pulumi.set(__self__, "content_type", content_type)
        if description is not None:
            pulumi.set(__self__, "description", description)

    @property
    @pulumi.getter(name="applicationId")
    def application_id(self) -> pulumi.Input[str]:
        """
        The application ID.
        """
        return pulumi.get(self, "application_id")

    @application_id.setter
    def application_id(self, value: pulumi.Input[str]):
        pulumi.set(self, "application_id", value)

    @property
    @pulumi.getter(name="configurationProfileId")
    def configuration_profile_id(self) -> pulumi.Input[str]:
        """
        The configuration profile ID.
        """
        return pulumi.get(self, "configuration_profile_id")

    @configuration_profile_id.setter
    def configuration_profile_id(self, value: pulumi.Input[str]):
        pulumi.set(self, "configuration_profile_id", value)

    @property
    @pulumi.getter
    def content(self) -> pulumi.Input[str]:
        """
        The content of the configuration or the configuration data.
        """
        return pulumi.get(self, "content")

    @content.setter
    def content(self, value: pulumi.Input[str]):
        pulumi.set(self, "content", value)

    @property
    @pulumi.getter(name="contentType")
    def content_type(self) -> pulumi.Input[str]:
        """
        A standard MIME type describing the format of the configuration content. For more information, see [Content-Type](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17).
        """
        return pulumi.get(self, "content_type")

    @content_type.setter
    def content_type(self, value: pulumi.Input[str]):
        pulumi.set(self, "content_type", value)

    @property
    @pulumi.getter
    def description(self) -> Optional[pulumi.Input[str]]:
        """
        A description of the configuration.
        """
        return pulumi.get(self, "description")

    @description.setter
    def description(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "description", value)


@pulumi.input_type
class _HostedConfigurationVersionState:
    def __init__(__self__, *,
                 application_id: Optional[pulumi.Input[str]] = None,
                 arn: Optional[pulumi.Input[str]] = None,
                 configuration_profile_id: Optional[pulumi.Input[str]] = None,
                 content: Optional[pulumi.Input[str]] = None,
                 content_type: Optional[pulumi.Input[str]] = None,
                 description: Optional[pulumi.Input[str]] = None,
                 version_number: Optional[pulumi.Input[int]] = None):
        """
        Input properties used for looking up and filtering HostedConfigurationVersion resources.
        :param pulumi.Input[str] application_id: The application ID.
        :param pulumi.Input[str] arn: The Amazon Resource Name (ARN) of the AppConfig  hosted configuration version.
        :param pulumi.Input[str] configuration_profile_id: The configuration profile ID.
        :param pulumi.Input[str] content: The content of the configuration or the configuration data.
        :param pulumi.Input[str] content_type: A standard MIME type describing the format of the configuration content. For more information, see [Content-Type](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17).
        :param pulumi.Input[str] description: A description of the configuration.
        :param pulumi.Input[int] version_number: The version number of the hosted configuration.
        """
        if application_id is not None:
            pulumi.set(__self__, "application_id", application_id)
        if arn is not None:
            pulumi.set(__self__, "arn", arn)
        if configuration_profile_id is not None:
            pulumi.set(__self__, "configuration_profile_id", configuration_profile_id)
        if content is not None:
            pulumi.set(__self__, "content", content)
        if content_type is not None:
            pulumi.set(__self__, "content_type", content_type)
        if description is not None:
            pulumi.set(__self__, "description", description)
        if version_number is not None:
            pulumi.set(__self__, "version_number", version_number)

    @property
    @pulumi.getter(name="applicationId")
    def application_id(self) -> Optional[pulumi.Input[str]]:
        """
        The application ID.
        """
        return pulumi.get(self, "application_id")

    @application_id.setter
    def application_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "application_id", value)

    @property
    @pulumi.getter
    def arn(self) -> Optional[pulumi.Input[str]]:
        """
        The Amazon Resource Name (ARN) of the AppConfig  hosted configuration version.
        """
        return pulumi.get(self, "arn")

    @arn.setter
    def arn(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "arn", value)

    @property
    @pulumi.getter(name="configurationProfileId")
    def configuration_profile_id(self) -> Optional[pulumi.Input[str]]:
        """
        The configuration profile ID.
        """
        return pulumi.get(self, "configuration_profile_id")

    @configuration_profile_id.setter
    def configuration_profile_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "configuration_profile_id", value)

    @property
    @pulumi.getter
    def content(self) -> Optional[pulumi.Input[str]]:
        """
        The content of the configuration or the configuration data.
        """
        return pulumi.get(self, "content")

    @content.setter
    def content(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "content", value)

    @property
    @pulumi.getter(name="contentType")
    def content_type(self) -> Optional[pulumi.Input[str]]:
        """
        A standard MIME type describing the format of the configuration content. For more information, see [Content-Type](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17).
        """
        return pulumi.get(self, "content_type")

    @content_type.setter
    def content_type(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "content_type", value)

    @property
    @pulumi.getter
    def description(self) -> Optional[pulumi.Input[str]]:
        """
        A description of the configuration.
        """
        return pulumi.get(self, "description")

    @description.setter
    def description(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "description", value)

    @property
    @pulumi.getter(name="versionNumber")
    def version_number(self) -> Optional[pulumi.Input[int]]:
        """
        The version number of the hosted configuration.
        """
        return pulumi.get(self, "version_number")

    @version_number.setter
    def version_number(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "version_number", value)


class HostedConfigurationVersion(pulumi.CustomResource):
    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 application_id: Optional[pulumi.Input[str]] = None,
                 configuration_profile_id: Optional[pulumi.Input[str]] = None,
                 content: Optional[pulumi.Input[str]] = None,
                 content_type: Optional[pulumi.Input[str]] = None,
                 description: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        """
        Provides an AppConfig Hosted Configuration Version resource.

        ## Example Usage

        ```python
        import pulumi
        import json
        import pulumi_aws as aws

        example = aws.appconfig.HostedConfigurationVersion("example",
            application_id=aws_appconfig_application["example"]["id"],
            configuration_profile_id=aws_appconfig_configuration_profile["example"]["configuration_profile_id"],
            description="Example Hosted Configuration Version",
            content_type="application/json",
            content=json.dumps({
                "foo": "bar",
            }))
        ```

        ## Import

        AppConfig Hosted Configuration Versions can be imported by using the application ID, configuration profile ID, and version number separated by a slash (`/`), e.g.

        ```sh
         $ pulumi import aws:appconfig/hostedConfigurationVersion:HostedConfigurationVersion example 71abcde/11xxxxx/2
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] application_id: The application ID.
        :param pulumi.Input[str] configuration_profile_id: The configuration profile ID.
        :param pulumi.Input[str] content: The content of the configuration or the configuration data.
        :param pulumi.Input[str] content_type: A standard MIME type describing the format of the configuration content. For more information, see [Content-Type](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17).
        :param pulumi.Input[str] description: A description of the configuration.
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: HostedConfigurationVersionArgs,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        Provides an AppConfig Hosted Configuration Version resource.

        ## Example Usage

        ```python
        import pulumi
        import json
        import pulumi_aws as aws

        example = aws.appconfig.HostedConfigurationVersion("example",
            application_id=aws_appconfig_application["example"]["id"],
            configuration_profile_id=aws_appconfig_configuration_profile["example"]["configuration_profile_id"],
            description="Example Hosted Configuration Version",
            content_type="application/json",
            content=json.dumps({
                "foo": "bar",
            }))
        ```

        ## Import

        AppConfig Hosted Configuration Versions can be imported by using the application ID, configuration profile ID, and version number separated by a slash (`/`), e.g.

        ```sh
         $ pulumi import aws:appconfig/hostedConfigurationVersion:HostedConfigurationVersion example 71abcde/11xxxxx/2
        ```

        :param str resource_name: The name of the resource.
        :param HostedConfigurationVersionArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(HostedConfigurationVersionArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 application_id: Optional[pulumi.Input[str]] = None,
                 configuration_profile_id: Optional[pulumi.Input[str]] = None,
                 content: Optional[pulumi.Input[str]] = None,
                 content_type: Optional[pulumi.Input[str]] = None,
                 description: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = _utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = HostedConfigurationVersionArgs.__new__(HostedConfigurationVersionArgs)

            if application_id is None and not opts.urn:
                raise TypeError("Missing required property 'application_id'")
            __props__.__dict__["application_id"] = application_id
            if configuration_profile_id is None and not opts.urn:
                raise TypeError("Missing required property 'configuration_profile_id'")
            __props__.__dict__["configuration_profile_id"] = configuration_profile_id
            if content is None and not opts.urn:
                raise TypeError("Missing required property 'content'")
            __props__.__dict__["content"] = content
            if content_type is None and not opts.urn:
                raise TypeError("Missing required property 'content_type'")
            __props__.__dict__["content_type"] = content_type
            __props__.__dict__["description"] = description
            __props__.__dict__["arn"] = None
            __props__.__dict__["version_number"] = None
        super(HostedConfigurationVersion, __self__).__init__(
            'aws:appconfig/hostedConfigurationVersion:HostedConfigurationVersion',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            application_id: Optional[pulumi.Input[str]] = None,
            arn: Optional[pulumi.Input[str]] = None,
            configuration_profile_id: Optional[pulumi.Input[str]] = None,
            content: Optional[pulumi.Input[str]] = None,
            content_type: Optional[pulumi.Input[str]] = None,
            description: Optional[pulumi.Input[str]] = None,
            version_number: Optional[pulumi.Input[int]] = None) -> 'HostedConfigurationVersion':
        """
        Get an existing HostedConfigurationVersion resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] application_id: The application ID.
        :param pulumi.Input[str] arn: The Amazon Resource Name (ARN) of the AppConfig  hosted configuration version.
        :param pulumi.Input[str] configuration_profile_id: The configuration profile ID.
        :param pulumi.Input[str] content: The content of the configuration or the configuration data.
        :param pulumi.Input[str] content_type: A standard MIME type describing the format of the configuration content. For more information, see [Content-Type](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17).
        :param pulumi.Input[str] description: A description of the configuration.
        :param pulumi.Input[int] version_number: The version number of the hosted configuration.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = _HostedConfigurationVersionState.__new__(_HostedConfigurationVersionState)

        __props__.__dict__["application_id"] = application_id
        __props__.__dict__["arn"] = arn
        __props__.__dict__["configuration_profile_id"] = configuration_profile_id
        __props__.__dict__["content"] = content
        __props__.__dict__["content_type"] = content_type
        __props__.__dict__["description"] = description
        __props__.__dict__["version_number"] = version_number
        return HostedConfigurationVersion(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="applicationId")
    def application_id(self) -> pulumi.Output[str]:
        """
        The application ID.
        """
        return pulumi.get(self, "application_id")

    @property
    @pulumi.getter
    def arn(self) -> pulumi.Output[str]:
        """
        The Amazon Resource Name (ARN) of the AppConfig  hosted configuration version.
        """
        return pulumi.get(self, "arn")

    @property
    @pulumi.getter(name="configurationProfileId")
    def configuration_profile_id(self) -> pulumi.Output[str]:
        """
        The configuration profile ID.
        """
        return pulumi.get(self, "configuration_profile_id")

    @property
    @pulumi.getter
    def content(self) -> pulumi.Output[str]:
        """
        The content of the configuration or the configuration data.
        """
        return pulumi.get(self, "content")

    @property
    @pulumi.getter(name="contentType")
    def content_type(self) -> pulumi.Output[str]:
        """
        A standard MIME type describing the format of the configuration content. For more information, see [Content-Type](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17).
        """
        return pulumi.get(self, "content_type")

    @property
    @pulumi.getter
    def description(self) -> pulumi.Output[Optional[str]]:
        """
        A description of the configuration.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter(name="versionNumber")
    def version_number(self) -> pulumi.Output[int]:
        """
        The version number of the hosted configuration.
        """
        return pulumi.get(self, "version_number")

